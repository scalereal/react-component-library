import { render } from '@testing-library/react';
import * as React from 'react';
import Table from '.';

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Table />);
        expect(container).toMatchSnapshot();
    });

});