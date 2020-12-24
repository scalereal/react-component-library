import { render } from '@testing-library/react';
import * as React from 'react';
import CheckBoxGroup from '.';

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CheckBoxGroup/>);
        expect(container).toMatchSnapshot();
    });

});