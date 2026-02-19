import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

function Home() {
    return (
        <>
        <div className= "bg-[#FFD7BA] p-70 rounded ">
            <p className= "text-2xl font-bold text-center">Featured Artist </p>
            <p className= "text-lg font-medium text-center">Small blurb about featured artist</p>
            <div className= "flex justify-center gap-4 mt-4">
            <Button variant="text" sx={{color: '#8B9D83'}}>Learn more</Button>
            <Button variant="text" sx={{color: '#8B9D83'}}>Visit their shop</Button>
            </div>
        </div>
        <Box component="selection" >
            <p className="text-lg font-bold text-center py-20">Current Events</p>
            <div className="grid grid-cols-3 gap-4 justify-items-center">

            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                <p className="items-center">Description of Event</p>
                </div>
            </div>
            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                    <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                    <p className="items-center">Description of Event</p>
                </div>
            </div>
            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                    <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                    <p className="items-center">Description of Event</p>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                    <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                    <p className="items-center">Description of Event</p>
                </div>
            </div>
            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                    <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                    <p className="items-center">Description of Event</p>
                </div>
            </div>
            <div className="flex flex-col max-w-sm md:max-w-lg py-8">
                <p className="w-full font-bold">Title of Event</p>
                <div className="flex flex-row gap-4 mt-2">
                    <Avatar alt="profile pic" src="./images/profile_pic1.jpg" />
                    <p className="items-center">Description of Event</p>
                </div>
            </div>
            </div>

        </Box>
        </>
    );
}

export default Home;