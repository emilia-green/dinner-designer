import { dishNoun } from "../data/ingredients";
import { adjective } from "../data/ingredients";
import { food_prefix } from "../data/ingredients";
import { verb } from "../data/ingredients";
import { concept } from "../data/ingredients";
import { dish } from "../data/ingredients";
import { buildingNoun } from "../data/ingredients";
import { flavorDescriptors } from "../data/ingredients";
import { preparationMethods } from "../data/ingredients";

const GetMeal = () => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


  return (
    <>
      <p>{getRandomItem(flavorDescriptors)}
            {'  '}
        {getRandomItem(preparationMethods)}
            {'  '}
         {getRandomItem(dish)}
         {' with '}
         {getRandomItem(flavorDescriptors)}
           {'  '}
         {getRandomItem(dish)}
         </p>
    </>
  );
};

export default GetMeal;