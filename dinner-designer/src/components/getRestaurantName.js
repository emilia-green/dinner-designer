import { restaurantAdjectives } from "../data/ingredients";
import { restaurantMascots } from "../data/ingredients";
import { restaurantThemes } from "../data/ingredients";
import { restaurantTypes } from "../data/ingredients";


const GetRestaurantName = () => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

const mealStructures =[
    ["The ", getRandomItem(restaurantAdjectives), " ", getRandomItem(restaurantMascots),],
    [getRandomItem(restaurantAdjectives), " ", getRandomItem(restaurantTypes),],
    [getRandomItem(restaurantAdjectives), " ", getRandomItem(restaurantThemes), " ", getRandomItem(restaurantTypes)],
    [getRandomItem(restaurantThemes), " ", getRandomItem(restaurantTypes)]


    
]
  return (
    <>
      <p id="restaurantName" className="rounded">{getRandomItem(mealStructures)}
         </p>
    </>
  );
};


export default GetRestaurantName;