import { render } from '@testing-library/react';
import * as React from 'react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Avatar/>);
        expect(container).toMatchSnapshot();
    });
});