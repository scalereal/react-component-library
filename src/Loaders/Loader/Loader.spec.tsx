import { render } from '@testing-library/react';
import * as React from 'react';
import Loader from '.';

describe('Loader component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader
                visible={true}
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader visible={true} size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});