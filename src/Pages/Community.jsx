import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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


function Community() {
    const theme = useTheme();
    const [sortOption, setSortOption] = useState('newest');
    const [openListing, setOpenListing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [altText, setAltText] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [img, setImg] = useState("");
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const currentUserEmail = auth.currentUser?.email;

    //Data for each item for sale
    const [itemCardData, setItemCardData] = useState([]);

    //Data for listing popup
    const [selectedListing, setSelectedListing] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const [calendarAnchor, setCalendarAnchor] = useState(null);

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

    useEffect(() => {
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
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", "Unsigned");

                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await response.json();
                imageUrl = data.secure_url;
            }

            const listingData = {
                title: newListing.title,
                description: newListing.description,
                startDate: newListing.startDate.toISOString(),
                endDate: newListing.endDate.toISOString(),
                startTime: newListing.startTime || "",
                endTime: newListing.endTime || "",
                location: newListing.eventLocation || "",
                img: imageUrl || "",
                imgAlt: newListing.altText || "",
                createdAt: createdAtDate.toISOString(),
                author: userEmail,
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
    const sortedItems = [...itemCardData]
        .filter(item => {
            if (!searchQuery) return true;
            const title = (item.title || '').toLowerCase();
            const description = (item.description || '').toLowerCase();
            const query = searchQuery.toLowerCase();
            return title.includes(query) || description.includes(query);
        })
        .sort((a, b) => {
            switch (sortOption) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                default:
                    return 0;
            }
        });



    return (
        <Box component="section" className="main-section" sx={{ padding: '40px 20px'}}>
            {/* Create post POPUP */}
            <Popup
                open={openListing}
                onClose={() => setOpenListing(false)}
                title="Create Post"
                className="accent-section"

            >
                <TextField fullWidth label="Title"
                           value={title}
                           className="main-section"
                           onChange={(e) => setTitle(e.target.value)}
                           sx={{mt: 1, mb: 2,
                               '& .MuiOutlinedInput-root': {
                                   '& fieldset': {
                                       borderColor: lavender[800],
                                   },
                                   '&:hover fieldset': {
                                       borderColor: lavender[800],
                                   },
                                   '&.Mui-focused fieldset': {
                                       borderColor: lavender[800],
                                   },
                                   '& input': {
                                       color: sage[900],
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
                           className="main-section"
                           onChange={(e) => setDescription(e.target.value)}
                           sx={{mb: 2,
                               '& .MuiOutlinedInput-root': {
                                   '& fieldset': {
                                       borderColor: lavender[800],
                                   },
                                   '&:hover fieldset': {
                                       borderColor: lavender[800],
                                   },
                                   '&.Mui-focused fieldset': {
                                       borderColor: lavender[800],
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
                        className="main-section"
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
                                            borderColor: lavender[800],
                                        },
                                        '&:hover fieldset': {
                                            borderColor: lavender[800],
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: lavender[800],
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
                        className="main-section"
                        onChange={(newValue) => setEndDate(newValue)}
                        minDate={startDate}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                sx: {
                                    mb: 2,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: lavender[800],
                                        },
                                        '&:hover fieldset': {
                                            borderColor: lavender[800],
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: lavender[800],
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
                    variant="contained"
                    component="label"
                    className="main-section"
                    sx={{ mb: imageFile ? 1 : 2, color: sage[500], bgcolor: peach[200] }}
                >
                    {imageFile ? "Change Image" : "Upload Image"}
                    <input
                        type="file"
                        hidden
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => {
                            setImageFile(e.target.files[0]);
                            setAltText(""); // reset alt text on new upload
                        }}
                    />
                </Button>

                {/* Show filename confirmation */}
                {imageFile && (
                    <Box sx={{ mb: 1, fontSize: '0.85rem', color: sage[600], display: 'flex', alignItems: 'center', gap: 1 }}>
                        ✅ <em>{imageFile.name}</em>
                    </Box>
                )}

                {/* Alt text field — only shown after image is selected */}
                {imageFile && (
                    <TextField
                        fullWidth
                        label="Image Alt Text (for accessibility)"
                        value={altText}
                        className="main-section"
                        onChange={(e) => setAltText(e.target.value)}
                        placeholder="e.g. A farmers market stall with fresh vegetables"
                        helperText="Describe the image for people using screen readers."
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: lavender[800] },
                                '&:hover fieldset': { borderColor: lavender[800] },
                                '&.Mui-focused fieldset': { borderColor: lavender[800] },
                            },
                            '& .MuiInputLabel-root': { color: sage[500] },
                            '& .MuiInputLabel-root.Mui-focused': { color: sage[500] },
                            '& .MuiFormHelperText-root': { color: sage[400] },
                        }}
                    />
                )}

                {/* Start Time */}
                <TextField
                    fullWidth
                    label="Start Time"
                    type="time"
                    value={startTime}
                    className="main-section"
                    onChange={(e) => setStartTime(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: lavender[800] },
                            '&:hover fieldset': { borderColor: lavender[800] },
                            '&.Mui-focused fieldset': { borderColor: lavender[800] },
                            '& input': { color: sage[900] },
                        },
                        '& .MuiInputLabel-root': { color: sage[500] },
                        '& .MuiInputLabel-root.Mui-focused': { color: sage[500] },
                    }}
                />

                {/* End Time */}
                <TextField
                    fullWidth
                    label="End Time"
                    type="time"
                    value={endTime}
                    className="main-section"
                    onChange={(e) => setEndTime(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: lavender[800] },
                            '&:hover fieldset': { borderColor: lavender[800] },
                            '&.Mui-focused fieldset': { borderColor: lavender[800] },
                            '& input': { color: sage[900] },
                        },
                        '& .MuiInputLabel-root': { color: sage[500] },
                        '& .MuiInputLabel-root.Mui-focused': { color: sage[500] },
                    }}
                />

                {/* Location */}
                <TextField
                    fullWidth
                    label="Location"
                    value={eventLocation}
                    className="main-section"
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Main Street Park, Booth 4"
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: lavender[800] },
                            '&:hover fieldset': { borderColor: lavender[800] },
                            '&.Mui-focused fieldset': { borderColor: lavender[800] },
                            '& input': { color: sage[900] },
                        },
                        '& .MuiInputLabel-root': { color: sage[500] },
                        '& .MuiInputLabel-root.Mui-focused': { color: sage[500] },
                    }}
                />
                {/* Post listing in Popup*/}
                <Button
                    variant="contained"
                    className="main-section"
                    sx={{ mb: 2, ml: 2,  color:sage[500], backgroundColor: lavender[200]}}
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
                               startTime,
                               endTime,
                               eventLocation,
                               altText,
                               img,

                           });

                           setTitle("");
                           setDescription("");
                           setStartDate(null);
                           setEndDate(null);
                           setImg("");
                           setImageFile(null);
                           setAltText("");
                           setStartTime("");
                           setEndTime("");
                           setEventLocation("");
                           setOpenListing(false);
                           fetchAllListings();
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
                                alt={selectedListing.imgAlt || selectedListing.title}

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
                        {(selectedListing.startTime || selectedListing.endTime) && (
                            <Box sx={{ mb: 2 }}>
                                <strong>Time:</strong><br />
                                {selectedListing.startTime} {selectedListing.endTime ? `– ${selectedListing.endTime}` : ""}
                            </Box>
                        )}

                        {selectedListing.location && (
                            <Box sx={{ mb: 2 }}>
                                <strong>Location:</strong> {selectedListing.location}
                            </Box>
                        )}

                        <Box sx={{ mb: 2 }}>
                            <strong>Posted by:</strong> {selectedListing.author}
                        </Box>

            <Button
                variant="contained"
                sx={{ backgroundColor: lavender[500], mr: 1 }}
                onClick={(e) => setCalendarAnchor(e.currentTarget)}
            >
                Save Event to Calendar

            </Button>

            <Menu
                anchorEl={calendarAnchor}
                open={Boolean(calendarAnchor)}
                onClose={() => setCalendarAnchor(null)}
            >
                <MenuItem onClick={() => {
                    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(selectedListing.title)}&details=${encodeURIComponent(selectedListing.description)}&dates=${selectedListing.startDate?.slice(0,10).replace(/-/g,'')}/${selectedListing.endDate?.slice(0,10).replace(/-/g,'')}`;
                    window.open(googleUrl, '_blank');
                    setCalendarAnchor(null);
                }}>
                    Google Calendar
                </MenuItem>

                <MenuItem onClick={() => {
                    const icsContent = [
                        'BEGIN:VCALENDAR',
                        'VERSION:2.0',
                        'BEGIN:VEVENT',
                        `SUMMARY:${selectedListing.title}`,
                        `DESCRIPTION:${selectedListing.description}`,
                        `DTSTART:${selectedListing.startDate?.slice(0,10).replace(/-/g,'')}`,
                        `DTEND:${selectedListing.endDate?.slice(0,10).replace(/-/g,'')}`,
                        'END:VEVENT',
                        'END:VCALENDAR'
                    ].join('\n');

                    const blob = new Blob([icsContent], { type: 'text/calendar' });
                    const icsUrl = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = icsUrl;
                    a.download = `${selectedListing.title}.ics`;
                    a.click();
                    URL.revokeObjectURL(icsUrl);
                    setCalendarAnchor(null);
                }}>
                    Apple / Outlook Calendar
                </MenuItem>

                <MenuItem onClick={() => setCalendarAnchor(null)}>
                    Cancel
                </MenuItem>
            </Menu>

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
                    <TextField
                        label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by title or description..."
                        color="secondary"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: lavender[800],
                                },
                                '&:hover fieldset': {
                                    borderColor: lavender[800],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: lavender[800],
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: lavender[800],
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: lavender[800],
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
                                    borderColor: lavender[800],
                                },
                                '&:hover fieldset': {
                                    borderColor: lavender[800],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: lavender[800],
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: lavender[800],
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: lavender[800],
                            },
                            '& .MuiOutlinedInput-input': {
                                color: lavender[800],
                            },
                            '& option': {
                                backgroundColor: lavender[100],
                                color: lavender[800],
                            },
                        }}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </TextField>
                    {/* CREATE LISTING BUTTON */}
                        <RequireAuth>
                            <Button
                                variant="contained"
                                sx={{backgroundColor: peach[500], color: tan[900]}}
                                onClick={() => setOpenListing(true)}
                            >
                                Create Community Post
                            </Button>
                        </RequireAuth>
                </Box>
            </Box>

            {/* ImageList Display */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageList
                    sx={{
                        width: { xs: '100%', md: 1000 },
                        height: 'auto',
                        overflow: 'visible'
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
                                    height: '300px',
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
                                sx={{
                                    '& .MuiImageListItemBar-title': {
                                        color: sage[900],  // Change title color
                                    },
                                    '& .MuiImageListItemBar-subtitle': {
                                        color: sage[700],  // Change subtitle color
                                    }
                                }}
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