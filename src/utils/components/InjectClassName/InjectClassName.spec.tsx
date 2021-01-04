import { render } from '@testing-library/react'
import React from 'react'
import InjectClassName from './InjectClassName'

describe('InjectClassName', () => {
    it('should inject className prop to all children', () => {
        const { container } = render(
            <InjectClassName className="test-className">
                <div>Test div 1</div>
                <div>Test div 2</div>
            </InjectClassName>
        );
        expect(container).toMatchSnapshot();
    });
});
