import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader from '.';

describe('CircleLoader component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CircleLoader/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <CircleLoader
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <CircleLoader size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});