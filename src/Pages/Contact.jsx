import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';
import {useTheme} from "@mui/material/styles";

function Contact() {
    const navigate = useNavigate();

    return (
        <Box component="section" className="main-section">
        <div style={{ color: sage[500] }} className="flex-1 pl-10 space-y-10">
            <section id="overview">
                <h1 className="accent-section text-3xl mb-3 text-center" > Contact  </h1>
                <h1 className="main-section text-3xl mb-3 text-center " > For issues, bug reports or questions please contact us at marketartcommunity@gmail.com  </h1>
            </section>
        </div>
        </Box>
    );
}

export default Contact;