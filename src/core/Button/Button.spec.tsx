import { render } from '@testing-library/react';
import * as React from 'react';
import Button from '.';

describe('Button', () => {
    it('should render properly', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <Button
                size="M"
                type='danger'
                textColor='white'
                bgColor= 'red'
                hoverEffect={true}
                hoverBgColor='#126AFA'
                hoverTextColor= '#ccd2db'
                hoverShadowColor="rgba(96, 120, 144, 0.35)"
                disabled={false}
            >Button</Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <Button size="M" disabled={true} >ClickMe</Button>
        );
        expect(container).toMatchSnapshot();
    });

    // it('should render with correct children', () => {
    //     const{container}=render(<Button>Click Me</Button>);
    //     expect(container).toContainHTML("Click Me");
    // });

});