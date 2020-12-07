import { render } from '@testing-library/react';
import * as React from 'react';
import CheckBox from '.';

describe('Avatar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CheckBox/>);
        expect(container).toMatchSnapshot();
    });

});