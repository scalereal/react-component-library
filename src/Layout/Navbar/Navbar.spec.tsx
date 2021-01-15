import { render } from '@testing-library/react';
import * as React from 'react';
import { Navbar } from '.';
import { Link } from '../../core/Link/Link';

describe('NavBar component', () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          }))
        });
    });

    it('should render with default theme', () => {
        const { container } = render(<Navbar/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Navbar
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
                }]}            />
        );
        expect(container).toMatchSnapshot();
    });
});