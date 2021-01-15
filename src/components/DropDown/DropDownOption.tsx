/**
 * @class DropDownOption
 */

import React, { useRef } from "react";
import Option from "../../models/Option";
import "../../styles/DropDownOption.css";
import useEnterKeyPress from "../../hooks/useEnterKeyPress";

export type DropDownOptionProps = {
    option: Option;
    onChange?: (event: any, option: Option) => void;
    renderItem?: (option: Option) => JSX.Element;
};

const DropDownOption = (props: DropDownOptionProps) => {
    const optionRef = useRef();

    useEnterKeyPress(optionRef, () => alert("enter clicked"));

    return (
        <div
            onClick={(event: any) => props.onChange?.(event, props.option)}
            className="nj-dropdown-option"
            ref={optionRef}
            tabIndex="0"
        >
            {props.renderItem ? props.renderItem(option) : props.option.label}
        </div>
    );
};

export default DropDownOption;
