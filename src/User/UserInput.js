import React from 'react';

const userInput = (props) => {

    const userInputStyle = {
        backgroundColor: 'yellow',
        font: 'inherit',
        border: '3px yellow',
        cursor: 'pointer'
      };
  
    return <input style = {userInputStyle} type="text" onChange={props.change} value={props.name}/>;
}

export default userInput;