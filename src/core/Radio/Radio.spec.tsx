import { render } from '@testing-library/react';
import * as React from 'react';
import { Radio } from '.';

describe('Radio component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Radio/>);
        expect(container).toMatchSnapshot();
    }); 
    
    it('should render with all the props given', () => {
        const { container } = render(
            <Radio
                label="1"
                value={1}
                size="M"
                labelColor='grey'
                bgColor= '#67686b'
                hoverCheckedBgColor='#126AFA'
                checkedBgColor='#126AFA'
                hoverEffect={true}
                labelHoverEffect={true}
                hoverBgColor='#373738'
                hoverLabelColor= '#12fadb'
            />
            );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <Radio disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });




});