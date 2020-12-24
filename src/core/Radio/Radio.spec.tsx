import { render } from '@testing-library/react';
import * as React from 'react';
import Radio from '.';

describe('Radio component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Radio/>);
        expect(container).toMatchSnapshot();
    });

});