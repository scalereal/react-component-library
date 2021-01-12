import { render } from '@testing-library/react';
import * as React from 'react';
import Loader10 from '.';

describe('Loader10 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader10/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader10
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader10 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});