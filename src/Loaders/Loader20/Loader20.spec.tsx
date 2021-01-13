import { render } from '@testing-library/react';
import * as React from 'react';
import Loader20 from '.';

describe('Loader20 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader20/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader20
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader20 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});