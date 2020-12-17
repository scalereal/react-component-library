import { render } from '@testing-library/react';
import React from 'react';
import Label from './Label';

describe('Label', () => {
    it('should render correctly with default props', () => {
        const { container } = render(<Label labelSize="S">Label</Label>);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the given props', () => {
        const { container } = render(
            <Label required showPointer labelColor="pink" labelSize="S" hoverColor="#ffff">
                Demo Label
            </Label>
        );
        expect(container).toMatchSnapshot();
    });
});
