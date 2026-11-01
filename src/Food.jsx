

function Food() {
    const food1 = "Pizza";
    const food2 = "Burger";
  return (
    <>
    <h1>Food Component</h1>
    <p>This is the Food component.</p>
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2}</li>
    </ul>
    </>
  );
}

export default Food;