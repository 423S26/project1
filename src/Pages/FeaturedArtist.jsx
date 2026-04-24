import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';

function FeaturedArtist() {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 4, backgroundColor: tan[50], minHeight: '100vh' }}>

            {/* Header */}
            <Box sx={{ mb: 4 }}>
                <Typography
                    className="accent-section"
                    variant="h3"
                    sx={{ fontFamily: 'SatisfyR', mb: 1, color: sage[700] }}
                >
                    Featured Artist
                </Typography>

                <Typography
                    className="main-section"
                    variant="body1"
                    sx={{ maxWidth: 700, color: lavender[800] }}
                >
                    Highlighting contemporary and traditional Asian artists contributing to our community marketplace and cultural events.
                </Typography>
            </Box>

            {/* Featured Artist Card */}
            <Card
                sx={{
                    display: 'flex',
                    gap: 3,
                    p: 3,
                    mb: 5,
                    backgroundColor: peach[50],
                    borderRadius: 3
                }}
            >
                <Avatar
                    sx={{ width: 120, height: 120 }}
                    src="/images/featured-artist.jpg"
                    alt="Featured Artist"
                />

                <CardContent>
                    <Typography
                        className="accent-section"
                        variant="h5"
                        sx={{ color: sage[700] }}
                    >
                        Mei Lin Chen
                    </Typography>

                    <Typography
                        className="main-section"
                        variant="body2"
                        sx={{ mt: 1, color: lavender[800] }}
                    >
                        Mei Lin Chen is a mixed-media artist blending traditional ink techniques with modern abstraction.
                        Her work explores identity, memory, and cultural continuity across generations.
                    </Typography>
                </CardContent>
            </Card>

            {/* Artwork Section */}
            <Typography
                className="accent-section"
                variant="h6"
                sx={{ mb: 2, color: sage[700] }}
            >
                Selected Works
            </Typography>

            <Grid container spacing={2}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item}>
                        <Box
                            className="main-section"
                            sx={{
                                height: 180,
                                borderRadius: 2,
                                backgroundColor: lavender[100],
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: lavender[700]
                            }}
                        >
                            Artwork {item}
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Community Section */}
            <Box sx={{ mt: 6, p: 3, backgroundColor: pink[50], borderRadius: 3 }}>
                <Typography
                    className="accent-section"
                    variant="h6"
                    sx={{ mb: 1, color: sage[700] }}
                >
                    Community & Events
                </Typography>

                <Typography
                    className="main-section"
                    variant="body2"
                    sx={{ color: lavender[800] }}
                >
                    Join our featured artist workshops, live demonstrations, and seasonal exhibitions.
                    Support artists directly through our marketplace or attend upcoming cultural events.
                </Typography>

                <Button
                    sx={{ mt: 2, color: sage[700] }}
                    onClick={() => navigate('/community')}
                >
                    View Events
                </Button>
            </Box>

        </Box>
    );
}

export default FeaturedArtist;