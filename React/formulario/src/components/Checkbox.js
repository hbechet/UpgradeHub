import React from 'react';

const Checkbox = ({ name, text }) => {
    return <div>
        <input type="checkbox" name={name} id={name} checked="checked" />
        <label for={name}>{text}</label>
    </div>;
}

export default Checkbox;