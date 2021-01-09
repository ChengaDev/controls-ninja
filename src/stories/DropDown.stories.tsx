import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DropDown, { Props } from '../components/DropDown/DropDown';

export default {
    title: 'Inputs/DropDown',
    component: DropDown
} as Meta;

const DropDownRender: Story<Props> = (args) => <DropDown {...args} />;

export const HelloWorld = DropDownRender.bind({});
HelloWorld.args = {
    text: 'World'
};
