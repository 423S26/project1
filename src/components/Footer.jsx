import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: sage[900],
                color: tan[100],
                py: 6,
                mt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                        gap: 4,
                        mb: 4,
                    }}
                >
                    {/* Company Info */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }}>
                            Asian Art App
                        </Typography>
                        <Typography variant="body2" sx={{ color: tan[200], lineHeight: 1.8 }}>
                            Explore and celebrate Asian culture through art, community, and shared experiences.
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Home
                            </Link>
                            <Link href="/shop" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Shop
                            </Link>
                            <Link href="/community" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Community
                            </Link>
                            <Link href="/Documentation" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Documentation
                            </Link>
                        </Box>
                    </Box>

                    {/* Resources */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }}>
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                About Us
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Contact
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Privacy Policy
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Terms of Service
                            </Link>
                        </Box>
                    </Box>

                    {/* Social Media */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Instagram
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Facebook
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                Twitter
                            </Link>
                            <Link href="#" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }}>
                                LinkedIn
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Divider */}
                <Box sx={{ borderTop: `1px solid ${tan[700]}`, py: 3 }} />

                {/* Copyright */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: tan[300] }}>
                        © {currentYear} Asian Art App. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }}>
                            Privacy
                        </Link>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }}>
                            Terms
                        </Link>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }}>
                            Sitemap
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;