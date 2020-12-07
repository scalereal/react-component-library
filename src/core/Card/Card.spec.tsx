import { render } from '@testing-library/react';
import * as React from 'react';
import Card from "./Card"


describe('Card', () => {
    it('should render title and message text', () => {
        const { container } = render(<Card src="Image" title="Title" message="Message" />);
        expect(container).toMatchSnapshot();
    });
});
