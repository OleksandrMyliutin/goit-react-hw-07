import React from 'react'
import { useDispatch } from 'react-redux';
import { changeOption } from '../../redux/optionSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const handleChangeOption = (variant) => {
        dispatch(changeOption(variant));
    }
    return (
        <div>
            <button onClick={()=> handleChangeOption("Add Contact")}>Add Contact</button>
            <button onClick={()=> handleChangeOption("All Contact")}>All Contact</button>
        </div>
    );
};

export default Filter;
