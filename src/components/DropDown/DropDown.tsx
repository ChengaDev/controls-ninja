/**
 * @class DropDown
 */

import React, { useState } from "react";

import DropDownMenu from "./DropDownMenu";
import Option from "../../models/Option";

import "../../styles/DropDown.css";

export type DropDownProps = {
    nonSelectionText: String;
    options: Option[];
    selectedOption?: Option;
    renderItem?: (option: Option) => JSX.Element;
    onChange?: (e: any, option: Option) => void;
    width?: String;
};

const DropDown = (props: DropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const onChange = (event: any, option: Option) => {
        setShowDropDown(false);
        setSelectedOption(option);
        props.onChange?.(event, option);
    };

    return (
        <>
            <div
                className="nj-dropdown-button button rounded"
                tabIndex="0"
                onClick={() => setShowDropDown(!showDropDown)}
            >
                {selectedOption ? selectedOption.label : props.nonSelectionText}
            </div>
            {showDropDown && (
                <DropDownMenu
                    renderItem={props.renderItem}
                    onChange={onChange}
                    options={props.options}
                />
            )}
        </>
    );
};

export default DropDown;
