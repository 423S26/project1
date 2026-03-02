import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    return (
        <div>
            For bugs email sylviahutzler21@gmail.com or kayleewood66@gmail.com
            For documentation visit <a href="https://github.com/423S26/project1/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#8B9D83',
                        fontWeight: 500,
                      }}> GitHub</a> or click
            <Button variant="text" sx={{color: '#8B9D83'}} onClick={() => navigate('/documentation')}>
                here
            </Button>
        </div>
    )
}

export default Contact;