/**
 * @class DropDownMenu
 */

import React from "react";
import DropDownOption from "./DropDownOption";

import Option from "../../models/Option";

import "../../styles/DropDownMenu.css";

type DropDownMenuProps = {
    options?: Option[];
    selectedOption?: Option | null;
    onChange?: (e: any, option: Option) => void;
    renderItem?: (option: Option) => JSX.Element;
    cssClass?: string | null;
    dropDownId: string;
};

const DropDownMenu = (props: DropDownMenuProps) => {
    const options = props.options;
    const hasOptions = options?.length || 0 > 0;

    return (
        <div
            className={`nj-dropdown menu rounded ${props.cssClass}`}
            aria-labelledby={props.dropDownId}
            role="menu"
        >
            {hasOptions &&
                options?.map((option, index) => (
                    <DropDownOption
                        key={index}
                        renderItem={props.renderItem}
                        onChange={props.onChange}
                        option={option}
                        isSelected={
                            option.value === props.selectedOption?.value
                        }
                    />
                ))}
        </div>
    );
};

export default DropDownMenu;
