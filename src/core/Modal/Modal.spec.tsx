import { render } from '@testing-library/react';
import * as React from 'react';
import Modal from "./Modal"


describe('Modal', () => {
    it('should render title and description text', () => {
        const { container } = render(<Modal  title="Title" description="Description" direction="column" align="left"/>);
        expect(container).toMatchSnapshot();
    });
});
