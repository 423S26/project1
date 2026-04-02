import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import { sage, peach, lavender, stone } from '../components/shared-theme/themePrimitives';

function Home() {
    const theme = useTheme();

    const eventCardData = [
        { id: 1, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
        { id: 2, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
        { id: 3, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
        { id: 4, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
        { id: 5, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
        { id: 6, title: 'Title of Event', description: 'Description of Event', image: '/public/Images/profile_pic1.jpg' },
    ];

    return (
        <>

            <Box
                sx={{
                    backgroundColor: sage[500],
                    padding: '150px',
                    marginBottom: '40px',

                }}
            >
                <Box
                    sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        marginBottom: '16px',
                    }}
                >
                    Featured Artist
                </Box>
                <Box
                    sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        marginBottom: '16px',
                    }}
                >
                    Small blurb about featured artist
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                        marginTop: '16px',
                    }}
                >
                    <Button variant="text" sx={{ color: '#FFFFFF', }}>
                        Learn more
                    </Button>
                    <Button variant="text" sx={{ color: '#FFFFFF', }}>
                        Visit their shop
                    </Button>
                </Box>
            </Box>

            {/* Current Events Section */}
            <Box component="section"
                 sx={{backgroundImage: "url('./Images/background1.png')",
                 backgroundSize: 'cover',}}
            >
                <Box
                    sx={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingY: '80px',
                    }}
                >
                    Current Events
                </Box>

                {/* First Grid of Events */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '16px',
                        justifyItems: 'center',
                        marginBottom: '40px',
                    }}
                >
                    {eventCardData.slice(0, 3).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </Box>

                {/* Second Grid of Events */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '16px',
                        justifyItems: 'center',
                    }}
                >
                    {eventCardData.slice(3, 6).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </Box>
            </Box>

        </>
    );
}

function EventCard({ event }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: { xs: '100%', md: '100%' },
                padding: '32px',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow: 3,
                },
            }}
        >
            <Box sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                {event.title}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
                <Avatar alt={event.title} src={event.image} />
                <Box sx={{ fontSize: '14px' }}>
                    {event.description}
                </Box>
            </Box>
        </Box>
    );
}

export default Home;