import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import DropDown, { DropDownProps } from "../components/DropDown/DropDown";

const options = [
    { label: "Option1", value: "1" },
    { label: "Option2", value: "2" },
    { label: "Option3", value: "3" },
    { label: "Option4", value: "4" }
];

export default {
    title: "Inputs/DropDown",
    component: DropDown
} as Meta;

const DropDownStory: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const BasicRender = DropDownStory.bind({});
BasicRender.args = {
    nonSelectionText: "Select an option",
    options,
    onChange: (e, option) => {
        console.log(option.label);
    }
};
