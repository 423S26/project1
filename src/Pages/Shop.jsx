import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sage, peach, lavender, stone } from '../components/shared-theme/themePrimitives';
import Popup from "../components/Popup";
import RequireAuth from '../components/RequireAuth';
import { useState } from 'react';
import { useEffect } from 'react';

import { auth, db } from '../firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

function Shop() {
    const theme = useTheme();
    const [sortOption, setSortOption] = useState('newest');
    const [openListing, setOpenListing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [img, setImg] = useState("");

    //Data for each item for sale
    const [itemCardData, setItemCardData] = useState([
        {
            id: 1,
            title: 'Art Print',
            description: 'Beautiful Asian art print',
            img: '/Images/AsianArtPrint1.jpg',
            price: 50.00,
            author: 'Artist Name',
            date: '2026-03-02'
        }
    ]);

    //Create listing
    const handleCreateListing = (newListing) => {
        setItemCardData((prev) => [
            ...prev,
            {
                ...newListing,
                id: Date.now(),
                date: new Date().toISOString(),
                author: auth.currentUser?.email || "Anonymous"
            }
        ]);
    };


    //Sort the items
    const sortedItems = [...itemCardData].sort((a, b) => {
        switch (sortOption) {
            case 'newest':
                return b.date.localeCompare(a.date);
            case 'oldest':
                return a.date.localeCompare(b.date);
            case 'priceLow':
                return a.price - b.price;
            case 'priceHigh':
                return b.price - a.price;
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
            {/* POPUP */}
            <Popup
                open={openListing}
                onClose={() => setOpenListing(false)}
                title="Create Listing"
            >
                <TextField fullWidth label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 2, borderColor: lavender[500] }} />
                <TextField fullWidth label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 2}} />
                <TextField fullWidth
                    label="Price $"
                    type="number"
                    value={price}
                    inputProps={{min:"0", step:"0.01"}}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ mb: 2 }} />
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
                    sx={{backgroundColor: lavender[500]}}
                    onClick={() => {
                        handleCreateListing({
                            title,
                            description,
                            price,
                            img
                        });
                        setOpenListing(false);
                    }}
                >
                    Post Listing
                </Button>
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
                        <ImageListItem key={item.id}>
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
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Shop;