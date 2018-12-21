import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Registration from '../pages/Registration'

Enzyme.configure({ adapter: new Adapter() });

// it('Renders a LEARN welcome', ()=>{
//   const app = mount(<App />)
//   expect(app.find('h2').text()).toEqual('Welcome to LEARN')
// })
it('two plus two equals four ', () => {
  expect(2+2).toBe(4);
});

// describe('Sign_In form', () => {
//   const wrapper = mount(<Registration />);
//
//   expect(wrapper.exists('')).to.equal(true);
//
// })
