/**
 * @class DropDownMenu
 */

import React from "react";
import DropDownOption from "./DropDownOption";

import Option from "../../models/Option";

type DropDownMenuProps = {
    options?: Option[];
    onChange?: (e: any, option: Option) => void;
    renderItem?: (option: Option) => JSX.Element;
};

const DropDownMenu = (props: DropDownMenuProps) => {
    const options = props.options;
    const hasOptions = options?.length || 0 > 0;

    return (
        <div className="nj-dropdown menu rounded">
            {hasOptions &&
                options?.map((option) => (
                    <DropDownOption
                        renderItem={props.renderItem}
                        onChange={props.onChange}
                        option={option}
                    />
                ))}
        </div>
    );
};

export default DropDownMenu;
