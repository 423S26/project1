import { Box, Typography, Container, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TermsOfService() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>

            {/* Title */}
            <Typography
                className="accent-section text-3xl font-bold mb-3 font-SatisfyR"
                variant="h3"
                gutterBottom
            >
                Terms of Service
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
                Effective Date: April 22, 2026
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Section 1 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    1. Acceptance of Terms
                </Typography>
                <Typography variant="body1">
                    By accessing or using the Asian Art Collection website at
                    https://csci423project1.netlify.app/ (the "Site"), you agree to be
                    bound by these Terms of Service. If you do not agree, do not use the Site.
                    We may update these Terms at any time.
                </Typography>
            </Box>

            {/* Section 2 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    2. Description of the Site
                </Typography>
                <Typography variant="body1">
                    Asian Art Collection is an educational project built for CSCI 423.
                    It provides informational content about Asian art including images,
                    descriptions, and historical context for non-commercial use.
                </Typography>
            </Box>

            {/* Section 3 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    3. Intellectual Property
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    3.1 Site Content
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    Original site content is owned by its creators. You may not copy or
                    redistribute it without permission.
                </Typography>

                <Typography variant="subtitle1">
                    3.2 Third-Party Content
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    Some artworks belong to third parties and are used under license or fair use.
                </Typography>

                <Typography variant="subtitle1">
                    3.3 Fair Use
                </Typography>
                <Typography variant="body2">
                    Content may be used for educational and scholarly purposes under fair use.
                </Typography>
            </Box>

            {/* Section 4 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    4. Permitted Use
                </Typography>
                <Typography variant="body1">
                    You may use the Site for personal and educational purposes only. You may not
                    scrape, modify, redistribute, or misuse the Site or its content.
                </Typography>
            </Box>

            {/* Section 5 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    5. Disclaimer of Warranties
                </Typography>
                <Typography variant="body1">
                    The Site is provided “as is” without warranties. We do not guarantee accuracy,
                    uptime, or reliability of any content.
                </Typography>
            </Box>

            {/* Section 6 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    6. Limitation of Liability
                </Typography>
                <Typography variant="body1">
                    We are not liable for any damages resulting from use of the Site.
                </Typography>
            </Box>

            {/* Section 7 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    7. Third-Party Links
                </Typography>
                <Typography variant="body1">
                    The Site may include external links. We are not responsible for third-party content.
                </Typography>
            </Box>

            {/* Section 8 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    8. Privacy
                </Typography>
                <Typography variant="body1">
                    Your use of the Site is also governed by our Privacy Policy.
                </Typography>
            </Box>

            {/* Section 9 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    9. Academic Context
                </Typography>
                <Typography variant="body1">
                    This is a student project. Content may not be professionally verified.
                </Typography>
            </Box>

            {/* Section 10 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    10. Termination
                </Typography>
                <Typography variant="body1">
                    We may suspend or terminate access at any time for violations of these Terms.
                </Typography>
            </Box>

            {/* Section 11 */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    11. Governing Law
                </Typography>
                <Typography variant="body1">
                    These Terms are governed by applicable laws of the United States and relevant state jurisdiction.
                </Typography>
            </Box>

            {/* Section 12 */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    12. Contact
                </Typography>
                <Typography variant="body1">
                    Email: marketartcommunity@gmail.com
                </Typography>
                <Typography variant="body1">
                    Website:{' '}
                    <Link href="https://csci423project1.netlify.app/" target="_blank">
                        csci423project1.netlify.app
                    </Link>
                </Typography>
            </Box>

        </Container>
    );
}

export default TermsOfService;