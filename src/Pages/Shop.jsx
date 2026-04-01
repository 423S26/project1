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

import { auth, db } from '../firebase';
import { collection, addDoc, deleteDoc,  onSnapshot, getDocs, query, doc, setDoc } from 'firebase/firestore';


function Shop() {
    const theme = useTheme();
    const [sortOption, setSortOption] = useState('newest');
    const [openListing, setOpenListing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [img, setImg] = useState("");
    const [error, setError] = useState(null);
    const currentUserEmail = auth.currentUser?.email;

    //Data for each item for sale
    const [itemCardData, setItemCardData] = useState([]);

    //Data for listing popup
    const [selectedListing, setSelectedListing] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);

    useEffect(() => {
        const fetchAllListings = async () => {
                try {
                    const allListingsRef = collection(db, 'allListings2');
                    const querySnapshot = await getDocs(allListingsRef);

                    const allListings = [];
                    querySnapshot.forEach((doc) => {
                        allListings.push({
                            id: doc.id,
                            ...doc.data(),
                            date: doc.data().createdAt || new Date().toISOString()
                        });
                    });

                    setItemCardData(allListings);
                } catch (error) {
                    console.error("Error fetching listings:", error);
                    setError("Failed to load listings");
                }
            };

            fetchAllListings();
        }, []);


    //Create listing
    const handleCreateListing = async (newListing) => {
        const userEmail = auth.currentUser?.email;
        console.log("Cloud Name: ", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
        try {
            const userCollectionName = userEmail.replace(/[.#$/[\]]/g, '_');
            const allListings = collection(db,'allListings2');
            const userCollectionRef = collection(db, userCollectionName);
            const parsedPrice = parseFloat(newListing.price) || 0;
            const createdAtDate = new Date();

            let imageUrl = "";
            if (imageFile) {

                     const formData = new FormData();
                     formData.append("file", imageFile);
                     formData.append("upload_preset", "Unsigned");

                     const response = await fetch(
                         `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                         {
                             method: "Post",
                             body: formData,
                             }
                         );
                     const data = await response.json();
                     console.log("Cloudinary response data:", data)
                     imageUrl = data.secure_url;
                     console.log("Image uploaded to Cloudinary:", imageUrl);
                }

            const listingData = {
                title: newListing.title,
                description: newListing.description,
                price: parsedPrice,
                img: imageUrl || "",
                createdAt: createdAtDate.toISOString(),
                author: userEmail,
                location: "shop"
            };

            await addDoc(userCollectionRef, listingData);
            await addDoc(allListings, listingData);

            console.log("Listing added successfully");
        }catch (error) {
            console.error("Error creating listing: ", error);
            setError(error.message);
            }
    };

//Allow owner to delete their post
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "allListings2", id));

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
            case 'priceLow':
                return parseFloat(a.price) - parseFloat(b.price);
            case 'priceHigh':
                return parseFloat(b.price) - parseFloat(a.price);
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
                    Create Listing
                </Button>
                </RequireAuth>
            </Box>
            {/* Create post POPUP */}
            <Popup
                open={openListing}
                onClose={() => setOpenListing(false)}
                title="Create Listing"
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
                <TextField fullWidth
                    label="Price $"
                    type="number"
                    value={price}
                    inputProps={{min:"0", step:"0.01"}}
                    onChange={(e) => setPrice(e.target.value)}
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
                        await handleCreateListing({
                            title,
                            description,
                            price,
                            img,
                            location
                        });
                        setTitle("");
                        setDescription("");
                        setPrice("");
                        setImg("");
                        setImageFile(null);
                        setOpenListing(false);

                    }}
                >
                    Post Listing
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
                                  <strong>Price:</strong><br />
                                  ${Number(selectedListing.price).toFixed(2)}
                              </Box>


                              <Box sx={{ mb: 2 }}>
                                  <strong>Posted by:</strong> {selectedListing.author}
                              </Box>

                              {currentUserEmail !== selectedListing.author && (
                                  <Button
                                      variant="contained"
                                      href={`mailto:${selectedListing.author}?subject=${encodeURIComponent(selectedListing.title + " inquiry")}&body=${encodeURIComponent("I am interested in buying " + selectedListing.title + ". I am available INSERT DATES AND TIMES YOU ARE AVAILABLE. Which of these times work for you?")}`}
                                      sx={{  borderColor: pink[300], backgroundColor: lavender[500] }}
                                  >
                                      Contact Seller
                                  </Button>
                              )}

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
                                onClick={()=>{
                                    setSelectedListing(item);
                                    setOpenDetails(true)
                                    }}
                                sx = {{ cursor: "pointer"}}
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
                                        by: {item.author} • ${item.price.toFixed(2)}
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
                                        handleDelete(item.id)
                                        }}
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

export default Shop;