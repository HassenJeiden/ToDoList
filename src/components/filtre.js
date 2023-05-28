import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filerUser } from '../ReduxFiles/Actions/Actions';


function RadioInputExample() {
    const dispatch = useDispatch();
    const handleUpdateUser = () => {
        const userData =selectedOption
        dispatch(filerUser(userData));
      };
    
    const [selectedOption, setSelectedOption] = useState('AT');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
};

return (
    <div className='list'>
        <label>
            <input type="radio" value="All" checked={selectedOption === 'All'} onChange={handleOptionChange} />
            All Tasks
        </label>
        <label>
            <input type="radio" value="Done" checked={selectedOption === 'Done'} onChange={handleOptionChange} />
            Tasks Done
        </label>
        <label>
            <input type="radio" value="Pending" checked={selectedOption === 'Pending'} onChange={handleOptionChange} />
            Pending Tasks
        </label>
        <button onClick={handleUpdateUser} className='btn'>filtre</button>
    </div>
);
}

export default RadioInputExample;
