import { render } from '@testing-library/react';
import * as React from 'react';
import { RadioGroup } from '.';

describe('RadioGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<RadioGroup />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <RadioGroup
                display='inline'
                mainLabel="Radio Group Label"
                size="M"
                labelColor='grey'
                bgColor= '#67686b'
                hoverCheckedBgColor='#126AFA'
                checkedBgColor='#126AFA'
                hoverEffect={true}
                labelHoverEffect={true}
                hoverBgColor='#373738'
                hoverLabelColor= '#12fadb'
                errorText='not valid'
                labelPosition='bottom'
            />
            );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <RadioGroup disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });
});