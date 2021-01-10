/**
 * @class DropDown
 */

import React, { useState } from "react";

import DropDownMenu from './DropDownMenu';
import Option from '../../models/Option';

import '../../styles/DropDown.css';

export type DropDownProps = { 
    nonSelectionText: String, 
    options: Option[], 
    selectedOption?: Option, 
    renderItem?: () => JSX.Element, 
    onChange?: (e: any, option: Option) => void,
    width?: String
};

const DropDown = (props: DropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);

    const onChange = (event: any, option: Option) => {
        setShowDropDown(false);
        props.onChange?.(event, option);
    };

    return <>
        <div className="nj-dropdown button rounded" onClick={() => setShowDropDown(!showDropDown)}>{props.nonSelectionText}</div>
        {showDropDown && <DropDownMenu onChange={onChange} options={[{label: 'Option1', value: '1'}, {label: 'Option2', value: '2'}]} />}
    </>
}

export default DropDown;