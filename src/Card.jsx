import profilePic from "./assets/finest.jpg";

function Card(props) {
    return (  
        <div className="card">
          <img className="card-image" src={profilePic} alt="profile picture" />
          <h2 className="card-title"> {props.name} </h2>
          <p className="card-text"> {props.description} </p>
        </div>
      )
}
export default Card;