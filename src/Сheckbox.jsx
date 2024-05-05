import React, {useState} from 'react';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Инвертируем текущее состояние чекбокса
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}

export default Checkbox;
