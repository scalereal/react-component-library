import { render } from '@testing-library/react';
import * as React from 'react';
import Loader1 from '.';

describe('Loader1 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader1/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader1
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader1 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});