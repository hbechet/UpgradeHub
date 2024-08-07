import React from 'react';

const Input = ({ name }) => {
    return <div>
        <label for={name}>{name}:</label>
        <input type="text" name={name} id={name} maxlength="100" />
    </div>;

};

export default Input;