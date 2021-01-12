import { render } from '@testing-library/react';
import * as React from 'react';
import Loader15 from '.';

describe('Loader15 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader15/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader15
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader15 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});