import './../App.css';
import Button from 'react-bootstrap/Button';

const MealCard = (props) => {
return (
    <>
    <div className="p-2"><p style={
        {
            fontSize:50

        }}><mark>{props.Building}</mark></p></div>
        <div className="p-0"><p style={
        {
            fontSize:14

        }}>{props.slogan}</p></div>
        <div className="p-2"><p style={
        {
            fontSize:40}}>Appetiser</p></div>
            </>
)
}

export default MealCard;