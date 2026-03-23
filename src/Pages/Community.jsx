import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sage, peach, lavender, stone, pink } from '../components/shared-theme/themePrimitives';
import Popup from "../components/Popup";
import RequireAuth from '../components/RequireAuth';
import { useState } from 'react';
import { useEffect } from 'react';

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { auth, db } from '../firebase';
import { collection, addDoc, deleteDoc,  onSnapshot, getDocs, query, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Community() {
    const theme = useTheme();
    const [sortOption, setSortOption] = useState('newest');
    const [openListing, setOpenListing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [img, setImg] = useState("");
    const [error, setError] = useState(null);
    const storage = getStorage();
    const currentUserEmail = auth.currentUser?.email;

    //Data for each item for sale
    const [itemCardData, setItemCardData] = useState([]);

    //Data for listing popup
    const [selectedListing, setSelectedListing] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);

    useEffect(() => {
        const fetchAllListings = async () => {
            try {
                const allcommunityposts = collection(db, 'allcommunityposts');
                const querySnapshot = await getDocs(allcommunityposts);

                const allPosts = [];
                querySnapshot.forEach((doc) => {
                    allPosts.push({
                        id: doc.id,
                        ...doc.data(),
                        date: doc.data().createdAt || new Date().toISOString()
                    });
                });

                setItemCardData(allPosts);
            }catch (error) {
                console.error("Error fetching listings:", error);
                setError("Failed to load listings");
            }
        };

        fetchAllListings();
    }, []);


    //Create listing
    const handleCreateListing = async (newListing) => {
        const userEmail = auth.currentUser?.email;

        try {
            const userCollectionName = userEmail.replace(/[.#$/[\]]/g, '_');
            const allcommunityposts = collection(db,'allcommunityposts');
            const userCollectionRef = collection(db, userCollectionName);

            const createdAtDate = new Date();

            let imageUrl = "";
            if (imageFile) {
                const storageRef = ref(storage, `listingImages/${Date.now()}-${imageFile.name}`);
                await uploadBytes(storageRef, imageFile);
                imageUrl = await getDownloadURL(storageRef);
            }

            const listingData = {
                title: newListing.title,
                description: newListing.description,
                startDate: newListing.startDate.toISOString(),
                endDate: newListing.endDate.toISOString(),
                img: imageUrl,
                createdAt: createdAtDate.toISOString(),
                author: userEmail,
                location: "community"
            };

            await addDoc(userCollectionRef, listingData);
            await addDoc(allcommunityposts, listingData);

            console.log("Document added successfully");
        }catch(error) {
            console.error(error);
        }
    };

//Allow owner to delete their post
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "allcommunityposts", id));
            const userCollectionName = currentUserEmail.replace(/[.#$/[\]]/g, '_');
            await deleteDoc(doc(db, userCollectionName, id));

            setItemCardData(prev =>
                prev.filter(item => item.id !== id)
            );

        } catch (error) {
            console.error("Error deleting listing:", error);
        }
    };


    //Sort the items
    const sortedItems = [...itemCardData].sort((a, b) => {
        switch (sortOption) {
            case 'newest':
                return b.date.localeCompare(a.date);
            case 'oldest':
                return a.date.localeCompare(b.date);

            default:
                return 0;
        }
    });



    return (
        <Box component="section" sx={{ padding: '40px 20px' }}>
            {/* CREATE LISTING BUTTON */}
            <Box sx={{ display: "flex", justifyContent: "right", mb: 3 }}>
                <RequireAuth>
                    <Button
                        variant="contained"
                        sx={{backgroundColor: peach[500]}}
                        onClick={() => setOpenListing(true)}
                    >
                        Create Community Post
                    </Button>
                </RequireAuth>
            </Box>
            {/* Create post POPUP */}
            <Popup
                open={openListing}
                onClose={() => setOpenListing(false)}
                title="Create Post"
            >
                <TextField fullWidth label="Title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           sx={{ mt: 1, mb: 2,
                               '& .MuiOutlinedInput-root': {
                                   '& fieldset': {
                                       borderColor: lavender[500],
                                   },
                                   '&:hover fieldset': {
                                       borderColor: lavender[500],
                                   },
                                   '&.Mui-focused fieldset': {
                                       borderColor: lavender[500],
                                   },
                               },
                               '& .MuiInputLabel-root': {
                                   color: sage[500],
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: sage[500],
                               },
                           }} />
                <TextField fullWidth label="Description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           sx={{ mb: 2,
                               '& .MuiOutlinedInput-root': {
                                   '& fieldset': {
                                       borderColor: lavender[500],
                                   },
                                   '&:hover fieldset': {
                                       borderColor: lavender[500],
                                   },
                                   '&.Mui-focused fieldset': {
                                       borderColor: lavender[500],
                                   },
                               },
                               '& .MuiInputLabel-root': {
                                   color: sage[500],
                               },
                               '& .MuiInputLabel-root.Mui-focused': {
                                   color: sage[500],
                               },
                           }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        disablePast
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                sx: {
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: lavender[500],
                                        },
                                        '&:hover fieldset': {
                                            borderColor: lavender[500],
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: lavender[500],
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: sage[500],
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: sage[500],
                                    },
                                }
                            },
                            popper: {

                                sx: {
                                    '& .MuiPickersDay-root.Mui-selected': {
                                        backgroundColor: lavender[500],
                                        color: "#fff"
                                     },
                                    '& .MuiPickersDay-root:hover': {
                                        backgroundColor: peach[200],
                                     },
                                    '& .MuiPickersCalendarHeader-label': {
                                        color: sage[500],
                                     },
                                    '& .MuiPickersArrowSwitcher-button': {
                                         color: sage[500]
                                    }
                                }
                            }
                        }}
                    />

                    <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        minDate={startDate}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                sx: {
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: lavender[500],
                                        },
                                        '&:hover fieldset': {
                                            borderColor: lavender[500],
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: lavender[500],
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: sage[500],
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: sage[500],
                                    },
                                }
                            }
                        }}
                    />
                </LocalizationProvider>

                <Button
                    variant="outlined"
                    component="label"
                    sx={{ mb: 2, color:peach[500], borderColor: peach[500] }}
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </Button>
                {/* Post listing in Popup*/}
                <Button
                    variant="contained"
                    sx={{ mb: 2, ml: 2,  backgroundColor: lavender[500]}}
                    onClick={async() => {
                           if (!startDate || !endDate) {
                               alert("Please select both start and end dates.");
                               return;
                           }

                           if (endDate.isBefore(startDate)) {
                               alert("End date cannot be before start date.");
                               return;
                           }

                           await handleCreateListing({
                               title,
                               description,
                               startDate,
                               endDate,
                               img,
                               location
                           });

                           setTitle("");
                           setDescription("");
                           setStartDate(null);
                           setEndDate(null);
                           setImg("");
                           setImageFile(null);
                           setOpenListing(false);
                           setLocation("community");
                    }}
                >
                    Post Community Event
                </Button>
            </Popup>
            {/* View post POPUP */}
            <Popup
                open={openDetails}
                onClose={() => setOpenDetails(false)}
                title={selectedListing?.title || "listing"}
                >
                {selectedListing && (
                    <>
                        {selectedListing.img && (
                            <img
                                src={selectedListing.img}
                                alt={selectedListing.title}
                                style={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    marginBottom: "16px"
                                    }}
                                />
                                )}
                        <Box sx={{ mb: 2 }}>
                            <strong>Description:</strong>
                            <p>{selectedListing.description}</p>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <strong>Event Dates:</strong><br />
                            {selectedListing.startDate?.slice(0,10)} – {selectedListing.endDate?.slice(0,10)}
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <strong>Posted by:</strong> {selectedListing.author}
                        </Box>

                        {currentUserEmail === selectedListing.author && (
                            <Button
                                variant="outlined"
                                sx={{ color: pink[300], borderColor: pink[300] }}
                                onClick={() => {
                                    handleDelete(selectedListing.id);
                                    setOpenDetails(false);
                                }}
                            >
                                Delete Listing
                            </Button>
                        )}
                    </>
                )}
            </Popup>
            <Box
                sx={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '40px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        marginBottom: '40px',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* Search Bar */}
                    <TextField label="Search"
                               color="secondary"
                               sx={{
                                   '& .MuiOutlinedInput-root': {
                                       '& fieldset': {
                                           borderColor: lavender[500],
                                       },
                                       '&:hover fieldset': {
                                           borderColor: lavender[500],
                                       },
                                       '&.Mui-focused fieldset': {
                                           borderColor: lavender[500],
                                       },
                                   },
                                   '& .MuiInputLabel-root': {
                                       color: lavender[500],
                                   },
                                   '& .MuiInputLabel-root.Mui-focused': {
                                       color: lavender[500],
                                   },
                               }}
                    />

                    {/* Sort Dropdown */}
                    <TextField
                        select
                        label="Sort By"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        SelectProps={{ native: true }}
                        sx={{
                            minWidth: 180,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: lavender[500],
                                },
                                '&:hover fieldset': {
                                    borderColor: lavender[500],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: lavender[500],
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: lavender[500],
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: lavender[500],
                            },
                        }}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </TextField>
                </Box>
            </Box>

            {/* ImageList Display */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageList
                    sx={{
                        width: { xs: '100%', md: 800 },
                        height: 'auto',
                        maxHeight: 800
                    }}
                    cols={3}
                    gap={16}
                >
                    {sortedItems.map((item) => (
                        <ImageListItem key={item.id}
                                    onClick={() =>{
                                        setSelectedListing(item);
                                        setOpenDetails(true);
                                        }}
                                    sx={{ cursor: "pointer"}}
                                    >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }}
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={
                                    <span>
                                        by: {item.author} • {item.startDate?.slice(0,10)} - {item.endDate?.slice(0,10)}
                                    </span>
                                }
                                position="below"
                            />
                            {currentUserEmail === item.author && (
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: pink[300],
                                        borderColor: pink[300]
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(item.id)}}
                                >
                                    Delete
                                </Button>
                            )}
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Community;