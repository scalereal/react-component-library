import { render } from '@testing-library/react';
import * as React from 'react';
import Label from './Label';

describe('Label', () => {
    it('should render correctly with default props', () => {
        const { container } = render(<Label labelSize="S">Label</Label>);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the given props', () => {
        const { container } = render(
            <Label required showPointer uppercase labelColor="pink" labelSize="S" lineHeight="1" labelWeight="medium">
                Demo Label
            </Label>
        );
        expect(container).toMatchSnapshot();
    });
});
