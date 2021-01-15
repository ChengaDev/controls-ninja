/**
 * @class DropDown
 */

import React, { useState, useRef } from "react";

import DropDownMenu from "./DropDownMenu";
import Option from "../../models/Option";
import keyCodes from "../../constants/keyCodes";
import useKeyDownEvent from "../../hooks/useKeyDownEvent";
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
    const dropdownButtonRef = useRef();
    const containerRef = useRef();

    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const onChange = (event: any, option: Option) => {
        setShowDropDown(false);
        setSelectedOption(option);
        props.onChange?.(event, option);
    };

    useKeyDownEvent(
        dropdownButtonRef,
        [keyCodes.ENTER, keyCodes.SPACE, keyCodes.DOWN_ARROW],
        (event) => {
            setShowDropDown(!showDropDown);
        }
    );

    useKeyDownEvent(containerRef, [keyCodes.ESCAPE], (event) => {
        setShowDropDown(false);
    });

    return (
        <div ref={containerRef}>
            <div
                className="nj-dropdown-button button rounded"
                tabIndex="0"
                onClick={() => setShowDropDown(!showDropDown)}
                ref={dropdownButtonRef}
            >
                {selectedOption
                    ? props.renderItem
                        ? props.renderItem(option)
                        : selectedOption.label
                    : props.nonSelectionText}
                <i className="fa fa-play" />
            </div>
            {showDropDown && (
                <DropDownMenu
                    selectedOption={selectedOption}
                    renderItem={props.renderItem}
                    onChange={onChange}
                    options={props.options}
                />
            )}
        </div>
    );
};

export default DropDown;
