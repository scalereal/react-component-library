import { render } from '@testing-library/react';
import * as React from 'react';
import Table from '.';

describe('CheckBoxGroup component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Table />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <Table
                hoverEffect={true}
                borderColor='grey'
                thBgColor='blue'
                thTextColor='white'
                nthTrBgColor='#8a8a8f'
                hoverTrBgColor='#434346'
                thData={[{id:1,data:'ID'},{id:2,data:'EmployeeID'},{id:3,data:'Name'}]}
                tdData={[
                    {trId:1,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
                    {trId:2,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
                    {trId:3,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
                    {trId:4,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
                ]}
            />
            );
        expect(container).toMatchSnapshot();
    });

});