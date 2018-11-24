import React from 'react';

const display = props => {
  let label = null;
  if(props.result) {
    label = 'Result: ' + props.result;
  }
  
    return (
        <div id="display" className='Display'>
          {props.input}
          {props.result && <p>{label}</p>}
        </div>
    );
}

export default display;
