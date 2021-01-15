import { render } from '@testing-library/react';
import * as React from 'react';
import CardTable from '.';
import Avatar from '../Avatar';
import Text from '../Text/Text';

const thData=[
    { id: 1, data: <Text textWeight="strong">User</Text> },
    { id: 2, data: <Text textWeight="strong">Last Login</Text> },
    { id: 3, data: <Text textWeight="strong">Department</Text> },
    { id: 4, data: <Text textWeight="strong">Status</Text> }
]
const tdData=[
    {
        trId: 1,
        trData: [
            {
                tdId: 1,
                tdData: (
                    <>
                        <Avatar size="XXS" display="inline-block" res="Akshay Kumar" />
                        <Text textSize="XS">Akshay Kumar</Text>
                    </>
                )
            },
            { tdId: 2, tdData: <Text textSize="XS">sep 20 2019</Text> },
            { tdId: 3, tdData: <Text textSize="XS">Development</Text> },
            {
                tdId: 4,
                tdData: (
                    <Text textSize="XS" textColor="blue">active</Text>
                )
            }
        ]
    },
    {
        trId: 2,
        trData: [
            {
                tdId: 1,
                tdData: (
                    <>
                        <Avatar size="XXS" display="inline-block" res="Akshay Kumar" />
                        <Text textSize="XS">Akshay Kumar</Text>
                    </>
                )
            },
            { tdId: 2, tdData: <Text textSize="XS">sep 20 2019</Text> },
            { tdId: 3, tdData: <Text textSize="XS">Development</Text> },
            {
                tdId: 4,
                tdData: (
                    <Text textSize="XS" textColor="blue">active</Text>
                )
            }
        ]
    },
    {
        trId: 3,
        trData: [
            {
                tdId: 1,
                tdData: (
                    <>
                        <Avatar size="XXS" display="inline-block" res="Akshay Kumar" />
                        <Text textSize="XS">Akshay Kumar</Text>
                    </>
                )
            },
            { tdId: 2, tdData: <Text textSize="XS">sep 20 2019</Text> },
            { tdId: 3, tdData: <Text textSize="XS">Development</Text> },
            {
                tdId: 4,
                tdData: (
                    <Text textSize="XS" textColor="blue">active</Text>
                )
            }
        ]
    },
    {
        trId: 4,
        trData: [
            {
                tdId: 1,
                tdData: (
                    <>
                        <Avatar size="XXS" display="inline-block" res="Akshay Kumar" />
                        <Text textSize="XS">Akshay Kumar</Text>
                    </>
                )
            },
            { tdId: 2, tdData: <Text textSize="XS">sep 20 2019</Text> },
            { tdId: 3, tdData: <Text textSize="XS">Development</Text> },
            {
                tdId: 4,
                tdData: (
                    <Text textSize="XS" textColor="blue">active</Text>
                )
            }
        ]
    }
]

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<CardTable />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(<CardTable hoverEffect={true}
            headerBgColor="rgb(32 224 255 / 82%)"
            trBgColor="#ad9d9d91"
            nthTrBgColor="#f5eded"
            thData={thData}
            tdData={tdData}/>);
        expect(container).toMatchSnapshot();
    });
});