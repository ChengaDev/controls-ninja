import * as React from 'react';
import DropDown from '../components/DropDown/DropDown';
import * as renderer from 'react-test-renderer';

test("Component should show 'red' text 'Hello World'", () => {
    const component = renderer.create(<DropDown text="World" />);
    const testInstance = component.root;

    expect(testInstance.findByType(DropDown).props.text).toBe('World');

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
