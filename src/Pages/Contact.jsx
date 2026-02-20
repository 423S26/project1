import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <div>
            For bugs email sylviahutzler21@gmail.com or kayleewood66@gmail.com
            For documentation visit github or click
            <Button variant="text" sx={{color: '#8B9D83'}} onClick={() => navigate('/documentation')}>
                here
            </Button>
        </div>
    )
}

export default Contact;