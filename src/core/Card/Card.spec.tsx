import { render } from '@testing-library/react';
import * as React from 'react';
import Card from "./Card"


describe('Card', () => {
    it('should render title and description text', () => {
        const { container } = render(<Card src="src"  title="Title" description="Description" variant="vertical" textAlignment="left"/>);
        expect(container).toMatchSnapshot();
    });
});
