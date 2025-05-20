import React from 'react';
import GetMeal from './getMeal';

const MealCard = (props) => {
  return (
    
    <div className="vstack gap-3" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    }}>
      <div >
        <div id="menuitem" className="p-1">
          <p style={{ fontSize: 35}}>
            {props.course}
          </p>
        </div>
      </div>
      <div>
        <div id="menuitem" style={{ fontSize:22}}>
          <GetMeal />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
