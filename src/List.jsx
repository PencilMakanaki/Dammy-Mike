import propTypes from 'prop-types';

// function List() {
//   const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

//   const listItems = fruits.map(fruit => <li>{fruit}</li>);

//   return (
//     <ul>{listItems}</ul>);

// //   return (
// //     <ul>
// //       {fruits.map((fruit, index) => (
// //         <li key={index}>{fruit }</li>
// //       ))}
// //     </ul>
// //   );
// }
function List(props) {

    const category = props.category;
    const itemlist = props.items;




//     const fruits = [{ id: 1, name: 'apple', calories: 95 }, 
//                     { id: 2, name: 'banana', calories: 105 }, 
//                     { id: 3, name: 'cherry', calories: 50 }, 
//                     { id: 4, name: 'date', calories: 110 }, 
//                     { id: 5, name: 'elderberry', calories: 120 }];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort fruits by name in ascending order
//fruits.sort((a, b) => b.name.localeCompare(a.name));
//fruits.sort((a, b) => a.calories - b.calories); // Sort fruits by calories in ascending order
//fruits.sort((a, b) => b.calories - a.calories); // Sort fruits by calories in descending order

//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // Filter fruits with calories less than 100
//const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const listItems = itemlist.map(fruit => <li key={fruit.id} >
                                          {fruit.name} - &nbsp;
                                           <b>{fruit.calories} </b> calories</li>
    );

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>    
    );
}
 List.propTypes = {
    items: propTypes.array.isRequired,
    category: propTypes.string.isRequired
  };
  List.defaultProps = {
    items: [],
    category: 'Default Category'
  }; 

export default List;