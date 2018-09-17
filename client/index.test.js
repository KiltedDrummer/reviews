import App from './index.jsx'
import React from 'react';
import {mount, shallow} from 'enzyme';

describe('App', () => {
    it('renders an App component', () => {
      const component = shallow(<App />);
      expect(component).toHaveLength(1);
    })
    it('should call fetch during componentDidMount', () => {
        const fakeFetch = jest.spyOn(App.prototype, 'fetcher');
        mount(<App />);
        expect(fakeFetch).toHaveBeenCalledTimes(1);
    });
    
});