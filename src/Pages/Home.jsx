import Button from '@mui/material/Button';


function Home() {
    return (
        <div className= "bg-[#FFD7BA] p-70 rounded ">
            <p className= "text-2xl font-bold text-center">Featured Artist </p>
            <p className= "text-lg font-medium text-center">Small blurb about featured artist</p>
            <div className= "flex justify-center gap-4 mt-4">
            <Button variant="text" sx={{color: '8B9D83'}}>Learn more</Button>
            <Button variant="text" sx={{color: '8B9D83'}}>Visit their shop</Button>
            </div>
        </div>
    )
}

export default Home;