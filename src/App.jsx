import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from './Food.jsx'
import Card from './Card';
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"; 
import MyComponent from "./MyComponent.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
function App() {

  const fruits = [{ id: 1, name: 'apple', calories: 95 }, 
                    { id: 2, name: 'banana', calories: 105 }, 
                    { id: 3, name: 'cherry', calories: 50 }, 
                    { id: 4, name: 'date', calories: 110 }, 
                    { id: 5, name: 'elderberry', calories: 120 }];

  const vegetables = [{ id: 6, name: 'potatoes', calories: 110 }, 
                    { id: 7, name: 'celery', calories: 15 }, 
                    { id: 8, name: 'carrot', calories: 25 }, 
                    { id: 9, name: 'spinach', calories: 110 }, 
                    { id: 10, name: 'broccoli', calories: 120 }];
                  
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Damilola" />
      <UserGreeting isLoggedIn={false} username="Bob" />
      <Card name="Damilola" description="web developer, Artist, Designer" />
      <Card name="John Doe" description="web developer, Artist, Designer" />
      <Card name="Jane Smith" description="web developer, Artist, Designer" />
      <Student name="Mary Johnson" age={50} grade="A" isStudent={false} />
      <Student name="Damilola" age={30} grade="A+" isStudent={true} />
      <Student name="John Doe" age={25} grade="B" isStudent={true} />
      <MyComponent />
      {fruits.length > 0 && <List items = {fruits} category ="fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="vegetables" />}
      <Button />
      <ProfilePicture />
      <Food />
      <Footer />

    </>
  )
}

export default App  