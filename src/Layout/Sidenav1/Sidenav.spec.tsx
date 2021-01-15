import { render } from '@testing-library/react';
import * as React from 'react';
import { Sidenav1 } from '.';
import { Link } from '../../core/Link/Link';

describe('Sidebar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Sidenav1/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Sidenav1
                navOptions={[
                        {
                            option: (
                                <Link href="#" linkSize="S">
                                    Home
                                </Link>
                            )
                        },
                        {
                            option: (
                                <Link href="#" linkSize="S">
                                    About Us
                                </Link>
                            )
                        },
                        {
                            option: (
                                <Link href="#" linkSize="S">
                                    Articles
                                </Link>
                            )
                        },
                        {
                            option: (
                                <Link href="#" linkSize="S">
                                    Contact
                                </Link>
                            )
                        }]}
            />
        );
        expect(container).toMatchSnapshot();
    });
});