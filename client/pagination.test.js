import Pagination from './pagination.jsx'
import React from 'react';
import {shallow} from 'enzyme';

describe('Pagination', () => {
  it('renders a pagination component', () => {
    const component = shallow(<Pagination />);
    expect(component).toHaveLength(1);
  })
  it('renders props correctly', () => {
    const component = shallow(<Pagination searchMode={"search"} length={"length"} handlePageChange={"handleChange"}/>);
    expect(component.instance().props.searchMode).toBe("search");
    expect(component.instance().props.length).toBe("length");
    expect(component.instance().props.handlePageChange).toBe("handleChange");
  })
});