import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader5 from '.';

describe('CircleLoader5 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(< CircleLoader5/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            < CircleLoader5
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            < CircleLoader5 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});