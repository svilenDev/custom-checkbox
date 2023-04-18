import React, { useState, useReducer, useEffect } from 'react'
import CheckboxHeading from '../text-content/CheckboxHeading'
import Checkbox from '../checkbox/Checkbox'
import CheckedPartial from '../checkbox/CheckedPartial';

// The naming follows the columns and the checkbox order in them, not the layout
const initialState = {
    colOneRowOne: false,
    colTwoRowOne: false,
    colTwoRowTwo: false,
    colTwoRowThree: false,
    colThreeRowOne: false,
    colThreeRowTwo: false,
    colThreeRowThree: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Checked':
            return { ...state, [action.section]: true };
        case 'Unchecked':
            return { ...state, [action.section]: false };
        default:
            return state;
    }
};

const CheckboxLayout = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [allChecked, setAllChecked] = useState(false);
    const [counter, setCounter] = useState(0);

    // handles the check state of the checkbox
    const handleCheck = (section) => {
        dispatch({
            type: 'Checked', section: section
        });
    }

    // handles the uncheck state of the checkbox
    const handleUncheck = (section) => {
        dispatch({
            type: 'Unchecked', section: section
        });
    }

    // follows the state of all boxes and if all are checked sets styling for the partial checkbox
    useEffect(() => {
        handleAllChecked();
    }, [state])

    // checks if all boxes are checked
    const handleAllChecked = () => {
        for (let key in state) {
            if (state[key] === false) {
                return setAllChecked(false);
            }
        }
        return setAllChecked(true);
    }

    // Text data
    const baseType = 'Base Checkbox';
    const stackedType = 'Stacked Checkboxes';
    const inlineType = 'Inline Checkboxes';
    const partialType = 'Partial Checkbox';
    const disabledType = 'Disabled Checkbox';

    // Disable class

    const disabled_class = 'disabled-checkbox';
    const partial = 'disabled-partial';
    const checked = 'disabled-ticked';
    const blank = 'disabled-blank';

    return (

        <section className='section-wrapper'>
            <main className="main-wrapper">

                {/* The First Column */}
                <aside className="content-wrapper">
                    <CheckboxHeading checkboxTypes={baseType} />
                    <ul className="checkbox-wrapper col">
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colOneRowOne}
                                handleCheck={() => handleCheck('colOneRowOne')}
                                handleUncheck={() => handleUncheck('colOneRowOne')}
                            />
                            <p>Checkbox 1</p>
                        </li>
                    </ul>
                </aside>

                {/* The Second Column */}
                <aside className="content-wrapper">
                    <CheckboxHeading checkboxTypes={stackedType} />
                    <ul className="checkbox-wrapper col">
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colTwoRowOne}
                                handleCheck={() => handleCheck('colTwoRowOne')}
                                handleUncheck={() => handleUncheck('colTwoRowOne')}
                            />
                            <p>Checkbox 1</p>
                        </li>
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colTwoRowTwo}
                                handleCheck={() => handleCheck('colTwoRowTwo')}
                                handleUncheck={() => handleUncheck('colTwoRowTwo')}
                            />
                            <p>Checkbox 2</p>
                        </li>
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colTwoRowThree}
                                handleCheck={() => handleCheck('colTwoRowThree')}
                                handleUncheck={() => handleUncheck('colTwoRowThree')}
                            />
                            <p>Checkbox 3</p>
                        </li>
                    </ul>
                </aside>

                {/* The Third Column */}
                <aside className="content-wrapper">
                    <CheckboxHeading checkboxTypes={inlineType} />
                    <ul className="checkbox-wrapper row">
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colThreeRowOne}
                                handleCheck={() => handleCheck('colThreeRowOne')}
                                handleUncheck={() => handleUncheck('colThreeRowOne')}
                            />
                            <p>Checkbox 1</p> </li>
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colThreeRowTwo}
                                handleCheck={() => handleCheck('colThreeRowTwo')}
                                handleUncheck={() => handleUncheck('colThreeRowTwo')}
                            />
                            <p>Checkbox 2</p>
                        </li>
                        <li className="checkbox-inner">
                            <Checkbox checked={state.colThreeRowThree}
                                handleCheck={() => handleCheck('colThreeRowThree')}
                                handleUncheck={() => handleUncheck('colThreeRowThree')}
                            />
                            <p>Checkbox 3</p>
                        </li>
                    </ul>
                </aside>

                {/* Disabled state */}
                <aside className="content-wrapper">
                    <CheckboxHeading checkboxTypes={disabledType} />
                    <ul className="checkbox-wrapper row">
                        <li className="checkbox-inner">
                            <Checkbox
                                disabled_class={disabled_class}
                                disable_type={partial}

                            />
                            <p className='disabled-text'>Disabled Partial</p> </li>
                        <li className="checkbox-inner">
                            <Checkbox
                                disabled_class={disabled_class}
                                disable_type={checked}
                            />
                            <p className='disabled-text'>Disabled Check</p>
                        </li>
                        <li className="checkbox-inner">
                            <Checkbox
                                disabled_class={disabled_class}
                                disable_type={blank}
                            />
                            <p className='disabled-text'>Disabled Blank</p>
                        </li>
                    </ul>
                </aside>
            </main>
            
            {/* Partial checkbox - follows how many checkboxes are ticked */}
            <aside>
                <CheckboxHeading checkboxTypes={partialType} />
                <CheckedPartial allChecked={allChecked} state={state} counter={counter} setCounter={setCounter} />
            </aside>

        </section>

    )
}

export default CheckboxLayout