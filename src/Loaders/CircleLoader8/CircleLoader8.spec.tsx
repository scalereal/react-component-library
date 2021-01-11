import { render } from '@testing-library/react';
import * as React from 'react';
import CircleLoader8 from '.';

describe('CircleLoader8 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<    CircleLoader8/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <    CircleLoader8
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <    CircleLoader8 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});