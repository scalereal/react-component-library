import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader9 from '.';

describe('CircleLoader9 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<     CircleLoader9/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <     CircleLoader9
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <     CircleLoader9 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});