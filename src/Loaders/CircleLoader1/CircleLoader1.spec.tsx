import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader1 from '.';

describe('CircleLoader1 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<CircleLoader1/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <CircleLoader1
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <CircleLoader1 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});