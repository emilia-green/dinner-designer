import './../App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import GetMeal from './getMeal';
import MealCard from './mealcard';
import { useState } from 'react';
import Title from './title';
import GetRestaurantName from './getRestaurantName';

const MenuCard = (props) => {
      const [menu, setMenu] = useState(() => generateMenu());

      function generateMenu(){
        return {

        };
      }

      function handleClick(){
        setMenu(generateMenu());
      }
      
return (
    <div className="vstack">
    <GetRestaurantName id="restaurantName"/>
      <MealCard course="Appetiser" dish={<GetMeal/>} />
      <MealCard course="Main Course" dish={<GetMeal/>} />
      <MealCard course="Dessert" dish={<GetMeal/>}/>
      <Button style={{marginTop:"15px", margin:"auto",}} class="btn btn-secondary" onClick={handleClick}>generate new menu</Button>
    </div>
    
)
}

export default MenuCard;