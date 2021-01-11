import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader12 from '.';

describe('CircleLoader12 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<CircleLoader12/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <CircleLoader12
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <CircleLoader12 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});