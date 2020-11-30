import { render } from '@testing-library/react';
import * as React from 'react';
import Button from './index';

describe('Button', () => {
    it('should render properly', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});