import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import logo from '/Images/market logo.svg';
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
                {/* Company Info, Quick Links, and Resources - All on same line */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
                        gap: 4,
                        mb: 4,
                        alignItems: 'flex-start',
                    }}
                >
                    {/* Company Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <div className="header_logo" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                            <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <Typography variant="body2" sx={{ color: tan[200], lineHeight: 1.6 }} className="main-section">
                            Explore and celebrate Asian culture through art, community, and shared experiences.
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }} className="accent-section">
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Home
                            </Link>
                            <Link href="/shop" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Shop
                            </Link>
                            <Link href="/community" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Community
                            </Link>
                            <Link href="/Documentation" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Documentation
                            </Link>
                        </Box>
                    </Box>

                    {/* Resources */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: peach[300] }} className="accent-section">
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/aboutUs" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                About Us
                            </Link>
                            <Link href="/contact" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Contact
                            </Link>
                            <Link href="/privacyPolicy" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Privacy Policy
                            </Link>
                            <Link href="/termsOfService" underline="none" sx={{ color: tan[200], '&:hover': { color: peach[300] } }} className="main-section">
                                Terms of Service
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
                    <Typography variant="body2" sx={{ color: tan[300] }} className="main-section">
                        © {currentYear} Asian Art App. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }} className="main-section">
                            Privacy
                        </Link>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }} className="main-section">
                            Terms
                        </Link>
                        <Link href="#" underline="none" sx={{ color: tan[300], fontSize: '0.875rem', '&:hover': { color: peach[300] } }} className="main-section">
                            Sitemap
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;