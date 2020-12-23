import { render } from '@testing-library/react';
import * as React from 'react';
import CheckBox from '.';

describe('CheckBox component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CheckBox/>);
        expect(container).toMatchSnapshot();
    });

});