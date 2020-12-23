import { render } from '@testing-library/react';
import * as React from 'react';
import CardTable from '.';

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CardTable />);
        expect(container).toMatchSnapshot();
    });

});