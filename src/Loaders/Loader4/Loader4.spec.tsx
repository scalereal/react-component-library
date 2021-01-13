import { render } from '@testing-library/react';
import * as React from 'react';
import Loader4 from '.';

describe('Loader4 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader4/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader4
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader4 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});