import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function PrivacyPolicy() {
    return (
        <Box component="section" className="main-section">
            <Container maxWidth="md" className="privacy-container">

                {/* Header */}
                <header className="privacy-header">
                    <Typography className="privacy-title" variant="h3">
                        Asian Art Collection
                    </Typography>

                    <Typography className="privacy-subtitle" variant="h4">
                        Privacy Policy
                    </Typography>

                    <Typography className="privacy-date" variant="body2">
                        Effective Date: April 22, 2026
                    </Typography>
                </header>

                <Divider className="privacy-divider" />

                {/* 1 */}
                <Typography className="privacy-section-title" variant="h5">
                    1. Introduction
                </Typography>

                <Typography className="privacy-text" paragraph>
                    Welcome to Asian Art Collection ("we," "our," or "us"). This Privacy Policy explains how
                    we collect, use, disclose, and safeguard your information when you visit our website at
                    https://csci423project1.netlify.app/.
                </Typography>

                <Typography className="privacy-text" paragraph>
                    If you do not agree with this policy, discontinue use of the Site.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 2 */}
                <Typography className="privacy-section-title" variant="h5">
                    2. Information We Collect
                </Typography>

                <Typography className="privacy-subsection" variant="h6">
                    2.1 Automatically Collected Information
                </Typography>

                <List className="privacy-list" dense>
                    <ListItem><ListItemText primary="IP address and approximate geographic location" /></ListItem>
                    <ListItem><ListItemText primary="Browser type and version" /></ListItem>
                    <ListItem><ListItemText primary="Operating system" /></ListItem>
                    <ListItem><ListItemText primary="Referring URLs and visited pages" /></ListItem>
                    <ListItem><ListItemText primary="Date and time of visit" /></ListItem>
                    <ListItem><ListItemText primary="Device identifiers" /></ListItem>
                </List>

                <Typography className="privacy-subsection" variant="h6">
                    2.2 Cookies and Tracking Technologies
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We use cookies and similar technologies to improve functionality, analyze traffic, and
                    understand user behavior. You may disable cookies in your browser, but some features may not work.
                </Typography>

                <Typography className="privacy-subsection" variant="h6">
                    2.3 Information You Provide
                </Typography>

                <Typography className="privacy-text" paragraph>
                    If you contact us or submit forms, we may collect your name, email address, and message content.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 3 */}
                <Typography className="privacy-section-title" variant="h5">
                    3. How We Use Your Information
                </Typography>

                <List className="privacy-list" dense>
                    <ListItem><ListItemText primary="Operate and maintain the Site" /></ListItem>
                    <ListItem><ListItemText primary="Improve performance and user experience" /></ListItem>
                    <ListItem><ListItemText primary="Analyze usage trends" /></ListItem>
                    <ListItem><ListItemText primary="Respond to inquiries" /></ListItem>
                    <ListItem><ListItemText primary="Comply with legal obligations" /></ListItem>
                </List>

                <Typography className="privacy-text" paragraph>
                    We do not sell or trade your personal information.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 4 */}
                <Typography className="privacy-section-title" variant="h5">
                    4. Third-Party Services
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We may use third-party analytics and hosting services. These providers have their own privacy policies.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 5 */}
                <Typography className="privacy-section-title" variant="h5">
                    5. Data Retention
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We retain data only as long as necessary for operations, legal compliance, or support purposes.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 6 */}
                <Typography className="privacy-section-title" variant="h5">
                    6. Data Security
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We use reasonable safeguards, but no system is fully secure.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 7 */}
                <Typography className="privacy-section-title" variant="h5">
                    7. Children’s Privacy
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We do not knowingly collect data from children under 13.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 8 */}
                <Typography className="privacy-section-title" variant="h5">
                    8. Your Rights
                </Typography>

                <List className="privacy-list" dense>
                    <ListItem><ListItemText primary="Access your data" /></ListItem>
                    <ListItem><ListItemText primary="Correct inaccurate data" /></ListItem>
                    <ListItem><ListItemText primary="Request deletion" /></ListItem>
                    <ListItem><ListItemText primary="Restrict or object to processing" /></ListItem>
                </List>

                <Typography className="privacy-text" paragraph>
                    Contact: contact@csci423project1.netlify.app
                </Typography>

                <Divider className="privacy-divider" />

                {/* 9 */}
                <Typography className="privacy-section-title" variant="h5">
                    9. Changes to This Policy
                </Typography>

                <Typography className="privacy-text" paragraph>
                    We may update this policy. Changes will be posted with a revised effective date.
                </Typography>

                <Divider className="privacy-divider" />

                {/* 10 */}
                <Typography className="privacy-section-title" variant="h5">
                    10. Contact Us
                </Typography>

                <Typography className="privacy-text">
                    Email: marketartcommunity@gmail.com
                </Typography>

                <Typography className="privacy-text">
                    Website: https://csci423project1.netlify.app/
                </Typography>

            </Container>
        </Box>
    );
}

export default PrivacyPolicy;