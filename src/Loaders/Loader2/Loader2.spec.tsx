import { render } from '@testing-library/react';
import * as React from 'react';
import Loader2 from '.';

describe('Loader2 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader2/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader2
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader2 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});