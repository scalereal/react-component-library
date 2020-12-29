import { render } from '@testing-library/react';
import React from 'react';
import { Input } from './Input';

describe('Input', () => {
    it('should render correctly with all the props given', () => {
        const { container } = render(
            <Input
                id="email-input"
                type="email"
                fullWidth
                required
                placeholder="Enter Email Address"
                prefix="www."
                suffix=".com"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when fullWidth & required props are falsy', () => {
        const { container } = render(
            <Input
                type="email"
                placeholder="Enter Email Address"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when it is disabled', () => {
        const { container } = render(<Input id="email-input" disabled placeholder="Enter Email Address" />);
        expect(container).toMatchSnapshot();
    });
});
