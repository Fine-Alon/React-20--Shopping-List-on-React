import React, {useRef, useState} from 'react';

function Checkbox({checked, onChange}) {
    const handleCheckboxChange = () => {
        onChange(); // Передаем обратное значение checked обратно в родительский компонент
    };

    return (<input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
    );
}

export default Checkbox;
