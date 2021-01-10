/**
 * @class DropDownOption
 */

import React from "react";
import Option from '../../models/Option';

export type DropDownOptionProps = { option: Option,  onChange?: (event: any, option: Option) => void };
    
const DropDownOption = (props: DropDownOptionProps) => {
    return <div onClick={(event: any) => props.onChange?.(event, props.option)} className="nj-dropdown">{props.option.label}</div>;
}

export default DropDownOption;