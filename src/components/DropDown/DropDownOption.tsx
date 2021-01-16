/**
 * @class DropDownOption
 */

import React, { useRef } from "react";
import Option from "../../models/Option";
import "../../styles/DropDownOption.css";
import keyCodes from "../../constants/keyCodes";
import useKeyDownEvent from "../../hooks/useKeyDownEvent";

export type DropDownOptionProps = {
    option: Option;
    onChange?: (event: any, option: Option) => void;
    renderItem?: (option: Option) => JSX.Element;
    isSelected: boolean;
};

const DropDownOption = (props: DropDownOptionProps) => {
    const optionRef = useRef();

    useKeyDownEvent(optionRef, [keyCodes.ENTER, keyCodes.SPACE], () => {
        optionRef.current.click();
    });

    return (
        <div
            onClick={(event: any) => props.onChange?.(event, props.option)}
            className={`nj-dropdown-option ${
                props.isSelected ? "selected" : ""
            }`}
            ref={optionRef}
            tabIndex={0}
            aria-label={props.option.label}
        >
            {props.renderItem ? props.renderItem(props.option) : props.option.label}
        </div>
    );
};

export default DropDownOption;
