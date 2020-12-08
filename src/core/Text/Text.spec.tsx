import { render } from '@testing-library/react';
import React from 'react';
import Text  from './Text';

describe('Text', () => {
    it('should render span element by default', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props', () => {
        const { container } = render(<Text  textColor="pink" uppercase lineThrough />);
        expect(container).toMatchSnapshot();
    });
});
