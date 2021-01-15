import { render } from '@testing-library/react';
import * as React from 'react';
import { CheckBox } from '.';

describe('CheckBox component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CheckBox/>);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <CheckBox
                label="1"
                value={1}
                size="M"
                fontSize='M'
                labelColor='white'
                bgColor= 'blue'
                hoverEffect={true}
                labelHoverEffect={true}
                hoverBgColor='#126AFA'
                labelHoverColor= '#12fadb'
                hoverShadowColor="rgba(96, 120, 144, 0.35)"
            />
            );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <CheckBox disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });

    // it('should render with correct children', () => {
    //     const{container}=render(<CheckBox label="1" value={1} />);
    //     expect(container).toContainHTML("<input type='checkbox' value='1' /><span>1</span>");
    // });

});