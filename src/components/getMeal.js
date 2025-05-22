
import { dish } from "../data/ingredients";
import { flavorDescriptors } from "../data/ingredients";
import { preparationMethods } from "../data/ingredients";
import { flavorProfiles } from "../data/ingredients";
import { sauce } from "../data/ingredients";
const GetMeal = () => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

const mealStructures =[
    [getRandomItem(preparationMethods), " ", getRandomItem(dish)," with ", getRandomItem(flavorDescriptors), " ", getRandomItem(dish)],
    [getRandomItem(flavorDescriptors), " ", getRandomItem(preparationMethods), " ", getRandomItem(dish)," with ", " ", getRandomItem(dish)],
    [getRandomItem(dish), " topped with ", getRandomItem(flavorProfiles), " ", getRandomItem(dish)],
    [getRandomItem(preparationMethods), " ", getRandomItem(dish)," coated with a ", getRandomItem(flavorProfiles), " ", getRandomItem(sauce)],
    [getRandomItem(flavorProfiles), " ", getRandomItem(dish)," tossed in a ", getRandomItem(flavorDescriptors), " ", getRandomItem(sauce)],
    [getRandomItem(preparationMethods), " ", getRandomItem(flavorProfiles), " ", getRandomItem(dish)],
    [getRandomItem(flavorDescriptors), " ", getRandomItem(dish)," on a bed of ", getRandomItem(dish)],
    [getRandomItem(preparationMethods), " ", getRandomItem(dish)," in a ", getRandomItem(flavorDescriptors), " ", getRandomItem(sauce)],
    [getRandomItem(flavorProfiles), " ", getRandomItem(dish)," served with your choice of ", getRandomItem(dish), " ", getRandomItem(sauce), " or ", getRandomItem(flavorDescriptors), " ", getRandomItem(dish)],
    [getRandomItem(flavorDescriptors), " ", getRandomItem(dish),", ", getRandomItem(flavorDescriptors), " ", getRandomItem(dish), " and a side of ", getRandomItem(preparationMethods), " ", getRandomItem(dish)  ],
]
  return (
    <>
      {getRandomItem(mealStructures)}
         
    </>
  );
};

export default GetMeal;