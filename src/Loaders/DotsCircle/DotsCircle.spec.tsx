import { render } from '@testing-library/react';
import * as React from 'react';
import DotsCircle from '.';

describe('DotsCircle Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<DotsCircle/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <DotsCircle
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <DotsCircle size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});