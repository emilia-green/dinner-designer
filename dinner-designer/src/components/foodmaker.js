import { dishNoun } from "../data/ingredients";
import { adjective } from "../data/ingredients";
import { food_prefix } from "../data/ingredients";
import { verb } from "../data/ingredients";
import { concept } from "../data/ingredients";
import { dish } from "../data/ingredients";
import { buildingNoun } from "../data/ingredients";

const Foodmaker = (props) => {
return (
    <div id="title" style={{
        display:'flex', 
        alignItems:'center',
        justifyContent: 'center',}}>
    <p style={
        {
            height:150,
            fontSize:60

        }}>{props.name}</p>
    </div>
)
}

export default Foodmaker;