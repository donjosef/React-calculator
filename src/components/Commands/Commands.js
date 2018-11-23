import React from 'react';
import Button from '../Button/Button';

const calcCommands = [
    {type: 'danger', value: 'AC', id: 'clear'},
    {type: 'operator', value: '/', id: 'divide'},
    {type: 'operator', value: '*', id: 'multiply'},
    {type: 'numb', value: '9', id: 'nine'},
    {type: 'numb', value: '8', id: 'eight'},
    {type: 'numb', value: '7', id: 'seven'},
    {type: 'operator', value: '+', id: 'add'},
    {type: 'numb', value: '6', id: 'six'},
    {type: 'numb', value: '5', id: 'five'},
    {type: 'numb', value: '4', id: 'four'},
    {type: 'operator', value: '-', id: 'subtract'},
    {type: 'numb', value: '3', id: 'three'},
    {type: 'numb', value: '2', id: 'two'},
    {type: 'numb', value: '1', id: 'one'},
    {type: 'numb', value: '0', id: 'zero'},
    {type: 'operator', value: '.', id: 'decimal'},
    {type: 'success', value: '=', id: 'equals'},
];

const commands = props => {
    const buttons = calcCommands.map(command => (
        <Button
            id={command.id}
            key={'command' + command.value}
            clicked={() => props.onAddInput(command.type, command.value)}
            type={command.type}>
            {command.value}
        </Button>
    ));
    return (
        <div className='Commands'>
            {buttons}
        </div>
    );
}

export default commands;
