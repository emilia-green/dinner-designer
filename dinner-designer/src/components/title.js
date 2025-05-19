import './../App.css';
import Button from 'react-bootstrap/Button';

const Title = (props) => {
return (
    <div id="title" style={{
        display:'flex', 
        alignItems:'center',
        justifyContent: 'center',}}>
    <Button variant="dark" style={
        {
            height:150,
            fontSize:60

        }}>{props.name}</Button>
    </div>
)
}

export default Title;