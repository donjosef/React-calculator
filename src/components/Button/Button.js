import React from 'react';

const button = props => {
    let classes = ['Button'];
    switch(props.type) {
        case 'danger':
            classes.push('Danger');
            break;
        case 'success':
            classes.push('Success');
            break;
        case 'operator':
            classes.push('Operator');
            break;
        case 'numb':
            classes.push('Numb');
            break;
        case 'point':
            classes.push('Point');
            break;         
    }
   
    return (
        <button
            className={classes.join(' ')} 
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default button;