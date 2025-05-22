import './../App.css';
import Button from 'react-bootstrap/Button';
import GetMeal from './getMeal';
import MealCard from './mealcard';
import { useState } from 'react';
import GetRestaurantName from './getRestaurantName';

const MenuCard = (props) => {
    const [menu, setMenu] = useState(generateMenu);

    function generateMenu() {
        return {
            appetiser: <GetMeal />,
            mainCourse: <GetMeal/>,
            dessert: <GetMeal />
        };
    }

    function handleClick() {
        setMenu(generateMenu());
    }

    return (
        <>
        <div className="vstack" style={{width:"400px", margin:"0 auto", alignItems:'center',
        justifyContent: 'center', textAlign:'center'}}>
            <GetRestaurantName id="restaurantName" />
            <MealCard course="Appetiser" dish={menu.appetiser} />
            <MealCard course="Main Course" dish={menu.mainCourse} />
            <MealCard course="Dessert" dish={menu.dessert} />
            <Button style={{ marginTop: "23px", margin: "auto", }} className="btn btn-secondary" onClick={handleClick}>generate new menu</Button>
        </div>
</>
    )
}

export default MenuCard;