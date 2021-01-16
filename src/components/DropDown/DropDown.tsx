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
    id: string;
    nonSelectionText: string;
    options: Option[];
    selectedOption?: Option;
    renderItem?: (option: Option) => JSX.Element;
    onChange?: (e: any, option: Option) => void;
    width?: string;
    label?: string;
    animated: boolean;
    isRequired: boolean;
};

const DropDown = (props: DropDownProps) => {
    const dropdownButtonRef = useRef();
    const containerRef = useRef();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const onChange = (event: any, option: Option) => {
        setShowDropDown(false);
        setSelectedOption(option);
        props.onChange?.(event, option);
    };

    useKeyDownEvent(
        dropdownButtonRef,
        [keyCodes.ENTER, keyCodes.SPACE, keyCodes.DOWN_ARROW],
        () => {
            setShowDropDown(!showDropDown);
        }
    );

    useKeyDownEvent(containerRef, [keyCodes.ESCAPE], () => {
        setShowDropDown(false);
    });

    return (
        <div ref={containerRef}>
            {props.label && <div className="nj-dropdown-label"><label htmlFor={props.id}>{props.label} {props.isRequired && "*"}</label></div>}
            <div
                id={props.id}
                className={`nj-dropdown-button button rounded ${showDropDown ? 'open' : ''}`}
                tabIndex={0}
                onClick={() => setShowDropDown(!showDropDown)}
                ref={dropdownButtonRef}
            >
                {selectedOption
                    ? props.renderItem
                        ? props.renderItem(selectedOption)
                        : selectedOption.label
                    : props.nonSelectionText}
                <i className="fa fa-play" />
            </div>
            {(props.animated || showDropDown) && (
                <DropDownMenu
                    cssClass={`${showDropDown ? 'open' : ''}`}
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
