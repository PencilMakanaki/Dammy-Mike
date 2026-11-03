




function ProfilePicture() {

    const imageUrl = "./src/assets/finest.jpg"; // Replace with your actual profile picture URL
     
    const handleClick = (e) => e.target.style.display ="none";
    return (
        <img className="click-pic" onClick={(e)=> handleClick(e)} src={imageUrl}></img>
    );
}
export default ProfilePicture;
