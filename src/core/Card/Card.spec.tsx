import { render } from '@testing-library/react';
import * as React from 'react';
import Card from "./Card"


describe('Card', () => {
    it('should render with All the default Props', () => {
        const { container } = render(<Card src="src"  title="Title" description="Description" variant="vertical" titleSize="S" descriptionSize="S" textAlignment="left"/>);
        expect(container).toMatchSnapshot();
    });
});
