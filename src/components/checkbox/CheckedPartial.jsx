import React, { useEffect } from 'react'

const CheckedPartial = ({ allChecked, counter, state, setCounter }) => {

    useEffect(() => {
        const checkedCount = Object.values(state).filter(item => item === true).length
        setCounter(checkedCount)
    }, [state])

    const checkMaxValue = counter * 15 === 105;

    return (
        <label className="custom-checkbox-container">
            <input type="checkbox" checked='checkd' className="original-input" />
            <span className={`${allChecked === true && checkMaxValue ? "custom-checkmark animate" : "not-all-checked"} `}></span>
            <progress className={`${checkMaxValue && 'animate'} progress`} value={counter * 15} max='105'>{counter}</progress>
            <span className='checkbox-counter'>{counter}</span>
        </label >
    )
}

export default CheckedPartial