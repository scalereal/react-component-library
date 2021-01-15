import { render } from '@testing-library/react';
import * as React from 'react';
import { Avatar } from '.';

describe('Avatar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Avatar/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Avatar
                size="M"
                textColor='#126AFA'
                bgColor= '#ccd2db'
                hoverEffect={true}
                hoverBgColor='#126AFA'
                hoverTextColor= '#ccd2db'
                hoverShadowColor="rgba(96, 120, 144, 0.35)"
                hoverTextShadowColor="rgba(0, 128, 0, 0.35)"
                res="pradip bhusnar"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Avatar size="L" hoverEffect={true} res='https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0='/>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <Avatar size="M" disabled={true} />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with correct characters', () => {
        const{container}=render(<Avatar res='Pradip Bhusnar' />);
        expect(container).toContainHTML("<span>PB</span>");
    });

});