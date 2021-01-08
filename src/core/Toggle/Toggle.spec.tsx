import { render } from '@testing-library/react';
import React from 'react';
import Toggle from './Toggle';

describe('Toggle', () => {
    it('should render correctly with all the props given', () => {
        const { container } = render(<Toggle size="M" />);
        expect(container).toMatchSnapshot();
    });
});
