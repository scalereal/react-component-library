import { render } from '@testing-library/react'
import React from 'react'
import Text  from './Text'

describe('Text', () => {
    it('should render span element by default', () => {
        const { container } = render(<Text textSize="S" />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props', () => {
        const { container } = render(<Text activeColor="red" hoverColor="blue" textColor="pink" uppercase lineThrough textSize="S" lineHeight="1" />);
        expect(container).toMatchSnapshot();
    });
});
