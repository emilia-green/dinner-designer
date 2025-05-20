import { dishNoun } from "../data/ingredients";
import { adjective } from "../data/ingredients";
import { food_prefix } from "../data/ingredients";
import { verb } from "../data/ingredients";
import { concept } from "../data/ingredients";
import { dish } from "../data/ingredients";
import { buildingNoun } from "../data/ingredients";
import { flavorDescriptors } from "../data/ingredients";
import { preparationMethods } from "../data/ingredients";
import { restaurantAdjectives } from "../data/ingredients";
import { restaurantMascots } from "../data/ingredients";

const GetRestaurantName = () => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <p id="restaurantName" className="rounded">
        {"The "}
        {getRandomItem(restaurantAdjectives)}
        {" "}
        {getRandomItem(restaurantMascots)}
         </p>
    </>
  );
};

export default GetRestaurantName;