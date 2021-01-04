import { render } from '@testing-library/react'
import * as React from 'react'
import Toast from './Toast'
import { ToastProps } from './types'

describe('Toast', () => {
    test.each(['danger', 'warning', 'success', 'info'])('should render properly with %s variant', (variant: ToastProps['variant']) => {
        const { container } = render(<Toast variant={variant} title="Title" message="Message" />);
        expect(container).toMatchSnapshot();
    });

    it('should render title and message text', () => {
        const { container } = render(<Toast variant="success" title="Title" message="Message" />);
        expect(container).toMatchSnapshot();
    });
});
