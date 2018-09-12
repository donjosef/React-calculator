import React from 'react';
import Button from '../Button/Button';

const calcCommands = [
    {type: 'danger', value: 'AC'},
    {type: 'operator', value: '/'},
    {type: 'operator', value: 'x'},
    {type: 'numb', value: 9},
    {type: 'numb', value: 8},
    {type: 'numb', value: 7},
    {type: 'operator', value: '+'},
    {type: 'numb', value: 6},
    {type: 'numb', value: 5},
    {type: 'numb', value: 4},
    {type: 'operator', value: '-'},
    {type: 'numb', value: 3},
    {type: 'numb', value: 2},
    {type: 'numb', value: 1},
    {type: 'numb', value: 0},
    {type: 'point', value: '.'},
    {type: 'success', value: '='},
];

const commands = props => {
    const buttons = calcCommands.map(command => (
        <Button 
            key={'command' + command.value}
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