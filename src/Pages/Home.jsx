import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import { sage, peach, lavender, tan, pink } from '../components/shared-theme/themePrimitives';
import { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popup from "../components/Popup";


import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from "@mui/material/Link";

function Home() {
    const theme = useTheme();

    const [eventCardData, setEventCardData] = useState([]);

    const [selectedListing, setSelectedListing] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const [calendarAnchor, setCalendarAnchor] = useState(null);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'allcommunityposts'));
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const upcoming = snapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter(event => event.startDate && new Date(event.startDate) >= today)
                    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
                    .slice(0, 6);

                setEventCardData(upcoming);
            } catch (err) {
                console.error("Error fetching events:", err);
            }
        };

        fetchUpcomingEvents();
    }, []);

    return (
    <>
        <Popup
            open={openDetails}
            onClose={() => {
                setOpenDetails(false);
                setCalendarAnchor(null);
            }}
            title= {
                <Typography className="accent-section" sx={{ fontSize: '2rem', color: sage[700] }}> {selectedListing?.title || "Event"}
                </Typography>
            }
        >
            {selectedListing && (
                <>
                    {selectedListing.img && (
                        <img
                            src={selectedListing.img}
                            alt={selectedListing.imgAlt || selectedListing.title}
                            style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
                        />
                    )}
                    <Box  className="main-section" sx={{ mb: 2, color: sage[700] }}>
                        <strong>Description:</strong>
                        <p>{selectedListing.description}</p>
                    </Box>
                    <Box  className="main-section" sx={{ mb: 2, color: sage[700] }}>
                        <strong>Event Dates:</strong><br />
                        {selectedListing.startDate?.slice(0, 10)} – {selectedListing.endDate?.slice(0, 10)}
                    </Box>
                    {selectedListing.location && (
                        <Box  className="main-section" sx={{ mb: 2, color: sage[700] }}>
                            <strong>Location:</strong> {selectedListing.location}
                        </Box>
                    )}
                    <Box  className="main-section" sx={{ mb: 2, color: sage[700] }}>
                        <strong>Posted by:</strong> {selectedListing.author}
                    </Box>

                    <Button
                        className="main-section"
                        variant="contained"
                        sx={{ backgroundColor: lavender[500], mr: 1,color: sage[700] }}
                        onClick={(e) => setCalendarAnchor(e.currentTarget)}
                    >
                        Save Event to Calendar
                    </Button>

                    <Menu
                        anchorEl={calendarAnchor}
                        open={Boolean(calendarAnchor)}
                        onClose={() => setCalendarAnchor(null)}
                    >
                        <MenuItem onClick={() => {
                            const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(selectedListing.title)}&details=${encodeURIComponent(selectedListing.description)}&dates=${selectedListing.startDate?.slice(0,10).replace(/-/g,'')}/${selectedListing.endDate?.slice(0,10).replace(/-/g,'')}`;
                            window.open(googleUrl, '_blank');
                            setCalendarAnchor(null);
                        }}>
                            Google Calendar
                        </MenuItem>
                        <MenuItem onClick={() => {
                            const icsContent = [
                                'BEGIN:VCALENDAR',
                                'VERSION:2.0',
                                'BEGIN:VEVENT',
                                `SUMMARY:${selectedListing.title}`,
                                `DESCRIPTION:${selectedListing.description}`,
                                `DTSTART:${selectedListing.startDate?.slice(0,10).replace(/-/g,'')}`,
                                `DTEND:${selectedListing.endDate?.slice(0,10).replace(/-/g,'')}`,
                                'END:VEVENT',
                                'END:VCALENDAR'
                            ].join('\n');
                            const blob = new Blob([icsContent], { type: 'text/calendar' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `${selectedListing.title}.ics`;
                            a.click();
                            URL.revokeObjectURL(url);
                            setCalendarAnchor(null);
                        }}>
                            Apple / Outlook Calendar
                        </MenuItem>
                        <MenuItem onClick={() => setCalendarAnchor(null)}>Cancel</MenuItem>
                    </Menu>
                </>
            )}
        </Popup>

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
                        color: tan[500],
                        marginBottom: '16px',
                    }}
                    className="accent-section"
                >
                    Featured Artist
                </Box>
                <Box
                    sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: tan[500],
                        marginBottom: '16px',
                    }}
                    className="main-section"
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
                    

                    <Link href="/featuredArtist" variant="text" className="main-section" sx={{ color: tan[500], }}>
                        VISIT THEIR SHOP
                    </Link>
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
                        color: sage[900]
                    }}
                    className="accent-section"
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
                        color: sage[900],
                    }}
                    className="main-section"
                >
                    {eventCardData.slice(0, 3).map((event) => (
                        <EventCard key={event.id} event={event} onSelect={() => {
                            setSelectedListing(event);
                            setOpenDetails(true);
                        }} />
                    ))}
                </Box>
                {/* Second Grid of Events */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: '16px',
                        justifyItems: 'center',
                        color: sage[900],
                    }}
                    className="main-section"
                >
                    {eventCardData.slice(3, 6).map((event) => (
                        <EventCard key={event.id} event={event} onSelect={() => {
                            setSelectedListing(event);
                            setOpenDetails(true);
                        }} />
                    ))}
                </Box>
            </Box>

        </>
    );
}

function EventCard({ event, onSelect }) {
    return (
        <Box
            onClick={onSelect}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: { xs: '100%', md: '100%' },
                padding: '32px',
                borderRadius: 2,
                cursor: 'pointer',
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
                {event.img
                    ? <img
                        src={event.img}
                        alt={event.imgAlt || event.title}
                        style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                      />
                    : <Avatar alt={event.title} />
                }
                <Box>
                    <Box sx={{ fontSize: '14px', mb: 0.5 }}>
                        {event.description}
                    </Box>
                    <Box sx={{ fontSize: '12px', color: sage[600] }}>
                        {event.startDate?.slice(0, 10)} – {event.endDate?.slice(0, 10)}
                    </Box>
                    {event.location && (
                        <Box sx={{ fontSize: '12px', color: sage[500] }}>
                            📍 {event.location}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Home;