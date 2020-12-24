import { render } from '@testing-library/react';
import * as React from 'react';
import RadioGroup from '.';

describe('Radio component', () => {
    it('should render with default theme', () => {
        const { container } = render(<RadioGroup />);
        expect(container).toMatchSnapshot();
    });

});