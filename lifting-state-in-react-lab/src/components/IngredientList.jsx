// src/components/IngredientList.jsx

const IngredientList = (props) => {
  const { stack, addToBurger } = props;

  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>Add</button>{" "}
          {/* Pass the entire ingredient object */}
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
