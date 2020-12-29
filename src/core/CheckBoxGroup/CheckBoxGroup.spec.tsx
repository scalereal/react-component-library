import { render } from '@testing-library/react';
import * as React from 'react';
import CheckBoxGroup from '.';

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CheckBoxGroup/>);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <CheckBoxGroup
                label="checkBoxGroup Label"
                size="M"
                fontSize='M'
                labelColor='white'
                bgColor= 'blue'
                showSelectAll={true}
                hoverEffect={true}
                labelHoverEffect={true}
                hoverBgColor='#126AFA'
                labelHoverColor= '#12fadb'
                hoverShadowColor="rgba(96, 120, 144, 0.35)"
                checkBoxOptions={[
                    {id:"1",value: 1,label: "1"},
                    {id:"2",value: 2,label: "2"}
                ]}
            />
            );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <CheckBoxGroup disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });

});