import { render } from '@testing-library/react';
import * as React from 'react';
import Loader6 from '.';

describe('Loader6 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<  Loader6/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <  Loader6
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <  Loader6 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});