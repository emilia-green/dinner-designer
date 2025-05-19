import './../App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/esm/Stack';
import Foodmaker from './foodmaker';
import MealCard from './mealcard';

const MenuCard = (props) => {
return (
    <div style={{
        display:'flex', 
        alignItems:'center',
        justifyContent: 'center',
        }}> 
      <Stack gap={1} style={{display:'flex', 
        alignItems:'center',
        justifyContent: 'center', }}>
            <MealCard building="Restaurant sdgfdfg" slogan="dfsg'm Gay"/>
        <div className="p-2"><p style={
        {
            fontSize:40

        }}>Appetiser</p></div>
        <div className="p-2"><p style={
        {
            fontSize:18

        }}>Lorem Ipsum Dolor Sit</p></div>
        <div className="p-2"><p style={
        {
            fontSize:40

        }}>Main Course</p></div>
        <div className="p-2"><p style={
        {
            fontSize:18

        }}>Lorem Ipsum Dolor Sit</p></div>
        <div className="p-2"><p style={
        {
            fontSize:40

        }}>Dessert</p></div>
        <div className="p-2"><p style={
        {
            fontSize:18

        }}>Lorem Ipsum Dolor Sit</p></div>
        <div className="p-2"></div>
      </Stack>
    </div>
)
}

export default MenuCard;