import React from 'react'

const Checkbox = ({ checked, handleCheck, handleUncheck, disabled_class, disable_type }) => {

    return (
        <label className='custom-checkbox-container'>
            {!disabled_class && <input type="checkbox" className="original-input" checked={checked} onChange={e => (e.target.checked ? handleCheck() : handleUncheck())} />}
            {disabled_class && <input type="checkbox" className={`disabled-checkbox`} disabled />}
            {!disabled_class && <span className="custom-checkmark"></span>}
            {disabled_class && <span className={`${disable_type}`}></span>}
        </label>
    )
}

export default Checkbox