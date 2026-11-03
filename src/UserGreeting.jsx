

function UserGreeting(props) {
//   if (props.isLoggedIn) {
//     return <h2 className="welcome-mess">Welcome back, {props.username}!</h2>;
//   }else {
//     return <h2 className="sign-up-mess" >Please sign up.</h2>;
//   }
  const welcomeMessage = <h2 className="welcome-mess">
                         Welcome back, {props.username}!
                         </h2>;

   const signUpMessage = <h2 className="sign-up-mess" >
                         Please sign up.
                         </h2>;
   return props.isLoggedIn ? welcomeMessage : signUpMessage;                      
}
export default UserGreeting;