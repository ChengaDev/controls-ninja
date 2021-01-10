import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DropDown, { DropDownProps } from '../components/DropDown/DropDown';

export default {
    title: 'Inputs/DropDown',
    component: DropDown
} as Meta;

const DropDownRender: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const HelloWorld = DropDownRender.bind({});
HelloWorld.args = {
    nonSelectionText: 'Select an option',
    onChange: (e, option) => { alert(option.label) }
};
