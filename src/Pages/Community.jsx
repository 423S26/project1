import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { sage, peach, lavender, stone } from '../components/shared-theme/themePrimitives';
import { useState } from 'react';

function Community() {
    const theme = useTheme();
    const [sortOption, setSortOption] = useState('newest');

    //Data for each item for sale
    const itemCardData = [
        {
            id: 1,
            title: 'Art Print',
            description: 'Beautiful Asian art print',
            img: '/Images/AsianArtPrint1.jpg',
            price: 50.00,
            author: 'Artist Name',
            date: '2026-03-02'
        },
        {
            id: 2,
            title: 'Homemade Pho',
            description: 'Delicious homemade Vietnamese pho',
            img: '/Images/homeadePho.jpg',
            price: 25.00,
            author: 'Chef Name',
            date: '2026-04-02'
        },
        {
            id: 3,
            title: 'Homemade Pho',
            description: 'Delicious homemade Vietnamese pho',
            img: '/Images/homeadePho.jpg',
            price: 25.00,
            author: 'Chef Name',
            date: '2026-05-02'
        },
        {
            id: 4,
            title: 'Art Print',
            description: 'Beautiful Asian art print',
            img: '/Images/AsianArtPrint1.jpg',
            price: 50.00,
            author: 'Artist Name',
            date: '2026-06-02'
        },
        {
            id: 5,
            title: 'Art Print',
            description: 'Beautiful Asian art print',
            img: '/Images/AsianArtPrint1.jpg',
            price: 50.00,
            author: 'Artist Name',
            date: '2026-07-02'
        },
        {
            id: 6,
            title: 'Homemade Pho',
            description: 'Delicious homemade Vietnamese pho',
            img: '/Images/homeadePho.jpg',
            price: 25.00,
            author: 'Chef Name',
            date: '2026-08-02'
        },
    ];


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

export default Community;