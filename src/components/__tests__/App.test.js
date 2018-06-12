// import Enzyme stuff
import { shallow } from 'enzyme';

// import React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import App from '../App';


import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it ('shows a CommentBox component', () => {
        expect(wrapper.find(CommentBox).length).toEqual(1);
    });

    it ('shows a CommentList component', () => {
        expect(wrapper.find(CommentList).length).toEqual(1);
    });

});