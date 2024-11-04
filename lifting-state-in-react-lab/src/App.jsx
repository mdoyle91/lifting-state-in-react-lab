// src/App.jsx

import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList.jsx";
import BurgerStack from "./components/BurgerStack.jsx";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (ingredient, index) => {
    console.log(stack);
    console.log(stack.filter((item) => item.name !== ingredient.name));
    let newStack = [...stack];
    newStack.splice(index, 1);
    setStack(
      newStack
      // stack.filter((item) => item.name !== ingredient.name)
      // (prevStack) => prevStack.filter((item) => item.name !== ingredient.name) //ChatGPT this line. I don't fully understand it. Worked on the code some more today with Kevin in my breakout room, and we walked through using the .filter method, so an item could be chosen more than once and remove only one isntead of all of the same name. I also updated my code to get rid of the prevStack and use the spread operator.
    );
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          stack={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
