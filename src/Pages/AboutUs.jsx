import { useNavigate } from 'react-router-dom';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';
import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';

function AboutUs() {
    const navigate = useNavigate();

    const values = [
        {
            title: "Cultural Preservation",
            description: "We celebrate and preserve the rich traditions of Asian art, making masterworks accessible to everyone.",
            color: peach[500]
        },
        {
            title: "Community Connection",
            description: "Building a vibrant community where artists, collectors, and enthusiasts share knowledge and inspiration.",
            color: pink[300]
        },
        {
            title: "Artistic Excellence",
            description: "Showcasing works from emerging and established artists, honoring both classical and contemporary expressions.",
            color: lavender[500]
        },
        {
            title: "Education & Growth",
            description: "Empowering users through interactive learning, exhibitions, and direct engagement with the art world.",
            color: sage[500]
        }
    ];

    const features = [
        "Curated Collections",
        "Artist Profiles",
        "Interactive Gallery",
        "Cultural Stories",
        "Expert Commentary",
        "Community Events"
    ];

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: tan[50] }}>
            {/* Navigation */}
            <Box
                component="nav"
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                    backgroundColor: 'rgba(250, 243, 221, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: `1px solid ${sage[100]}`
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>

                        <Button
                            onClick={() => navigate('/')}
                            sx={{
                                fontFamily: 'CourierR, sans-serif',
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                color: sage[500],
                                '&:hover': { color: sage[700] }
                            }}
                        >
                            ← Back to Home
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                    px: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${lavender[300]} 0%, ${peach[500]} 100%)`
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        pointerEvents: 'none'
                    }}
                />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box sx={{ mb: 3, display: 'inline-block', px: 2, py: 1, bgcolor: `${peach[500]}20`, borderRadius: '20px' }}>
                        <Typography
                            variant="caption"
                            sx={{
                                fontFamily: 'CourierR, sans-serif',
                                fontWeight: 600,
                                color: sage[700],
                                fontSize: '0.9rem'
                            }}
                        >
                            About Our Mission
                        </Typography>
                    </Box>

                    <Typography
                        className="accent-section"
                        variant="h2"
                        sx={{
                            fontFamily: 'SatisfyR, cursive',
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 400,
                            mb: 2,
                            lineHeight: 1.2,
                            color: sage[500],

                        }}
                    >
                        Celebrating Asian Art,
                        <Box component="span" sx={{ display: 'block', color: sage[500] }}>
                            Connecting Communities
                        </Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'CourierR, sans-serif',
                            fontSize: '1.1rem',
                            color: sage[600],
                            lineHeight: 1.8,
                            maxWidth: '600px'
                        }}
                    >
                        Asian Art App is a platform dedicated to bringing the beauty, history, and significance of Asian art into your world. We believe in making cultural treasures accessible, fostering appreciation, and connecting passionate people who celebrate these timeless expressions.
                    </Typography>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Our Story */}
                <Box sx={{ py: 4, borderTop: `1px solid ${sage[200]}` }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                className="accent-section"
                                variant="h3"
                                sx={{
                                    fontFamily: 'SatisfyR, cursive',
                                    fontSize: '2.5rem',
                                    mb: 3,
                                    color: sage[500]
                                }}
                            >
                                Our Story
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'CourierR, sans-serif',
                                    color: sage[700],
                                    mb: 2,
                                    lineHeight: 1.8
                                }}
                            >
                                Founded with a passion for Asian art and culture, our app was created to bridge the gap between traditional artworks and modern audiences. We recognized that many remarkable pieces and cultural narratives were hidden behind museum walls or lost to time.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'CourierR, sans-serif',
                                    color: sage[700],
                                    mb: 2,
                                    lineHeight: 1.8
                                }}
                            >
                                Today, we've grown into a thriving community of art lovers, collectors, educators, and artists who share a common goal: to celebrate, preserve, and share the incredible diversity of Asian artistic traditions.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'CourierR, sans-serif',
                                    color: sage[700],
                                    lineHeight: 1.8
                                }}
                            >
                                From traditional ink paintings and ceramics to contemporary installations, we showcase works that inspire, educate, and transform how people understand our world.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Core Values */}
                <Box sx={{ py: 6 }}>
                    <Typography
                        className="accent-section"
                        variant="h3"
                        sx={{
                            fontFamily: 'SatisfyR, cursive',
                            fontSize: '2.5rem',
                            mb: 6,
                            textAlign: 'center',
                            color: sage[500]
                        }}
                    >
                        Our Core Values
                    </Typography>
                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        backgroundColor: `${value.color}15`,
                                        borderLeft: `5px solid ${value.color}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: 4,
                                            transform: 'scale(1.02)'
                                        }
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="h5" sx={{ fontSize: '2rem', mb: 2 }}>
                                        {value.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: 'CourierR, sans-serif',
                                            fontWeight: 700,
                                            mb: 1,
                                            color: '#1a1a1a'
                                        }}
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontFamily: 'CourierR, sans-serif',
                                            color: sage[700],
                                            lineHeight: 1.7
                                        }}
                                    >
                                        {value.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Mission & Vision */}
                <Box sx={{ py: 6 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    p: 5,
                                    borderRadius: 3,
                                    backgroundColor: `${peach[500]}15`,
                                    border: `2px solid ${peach[500]}40`
                                }}
                                elevation={0}
                            >
                                <Typography
                                    className="accent-section"
                                    variant="h5"
                                    sx={{
                                        fontFamily: 'SatisfyR, cursive',
                                        mb: 2,
                                        color: peach[500]
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: 'CourierR, sans-serif',
                                        color: sage[700],
                                        lineHeight: 1.8
                                    }}
                                >
                                    To democratize access to Asian art and culture, making extraordinary works and stories available to people everywhere. We're committed to fostering appreciation, supporting artists, and building a global community united by the beauty of Asian artistic expression.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    p: 5,
                                    borderRadius: 3,
                                    backgroundColor: `${sage[500]}15`,
                                    border: `2px solid ${sage[500]}40`
                                }}
                                elevation={0}
                            >
                                <Typography
                                    className="accent-section"
                                    variant="h5"
                                    sx={{
                                        fontFamily: 'SatisfyR, cursive',
                                        mb: 2,
                                        color: sage[500]
                                    }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: 'CourierR, sans-serif',
                                        color: sage[700],
                                        lineHeight: 1.8
                                    }}
                                >
                                    A world where Asian art is celebrated globally, where cultural traditions are preserved and evolved, and where artists and enthusiasts are connected through a shared passion for beauty, meaning, and artistic innovation.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ py: 6, textAlign: 'center' }}>
                    <Typography
                        className="accent-section"
                        variant="h4"
                        sx={{
                            fontFamily: 'SatisfyR, cursive',
                            fontSize: '2rem',
                            mb: 3,
                            color: sage[500]
                        }}
                    >
                        Ready to Explore?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'CourierR, sans-serif',
                            color: sage[700],
                            mb: 4,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Join our growing community and discover the boundless beauty of Asian art.
                    </Typography>
                    <Button
                        onClick={() => navigate('/')}
                        sx={{
                            backgroundColor: peach[500],
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: 1,
                            fontFamily: 'CourierR, sans-serif',
                            fontWeight: 700,
                            textTransform: 'none',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: peach[600],
                                boxShadow: 4,
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        Start Exploring
                    </Button>
                </Box>
            </Container>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    backgroundColor: `${sage[500]}15`,
                    py: 4,
                    textAlign: 'center',
                    mt: 4
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'CourierR, sans-serif',
                        color: sage[700],
                        mb: 0.5
                    }}
                >
                    Asian Art App © 2024
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        fontFamily: 'CourierR, sans-serif',
                        color: sage[600]
                    }}
                >
                    Celebrating culture, preserving heritage, connecting communities
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutUs;