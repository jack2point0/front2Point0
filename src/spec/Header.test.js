import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Header from '../Components/Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

const headerAtts = { width: 0 }

test ('renders the Header correctly', () => {
 const json = renderer
             .create(<Header header={headerAtts} />)
             .toJSON();
 expect(json).toMatchSnapshot();
})
