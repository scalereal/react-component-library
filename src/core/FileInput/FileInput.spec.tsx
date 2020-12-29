import { render } from '@testing-library/react';
import * as React from 'react';
import FileInput from '.';

describe('CheckBox component', () => {
    it('should render with default theme', () => {
        const { container } = render(<FileInput/>);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <FileInput
                label="checkBoxGroup Label"
                size="M"
                hoverEffect={true}
                errorText='Invalid File'
                btnBgColor='#b1b7b9f'
                btnHoverBgColor='#1624e0f'
                btnHoverBorderColor='#e7eef0f'
                btnTextColor='#3e1addf'
                borderColor='#e5e8e9f'
                textColor='#052029f'
            />
            );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <FileInput disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });
});