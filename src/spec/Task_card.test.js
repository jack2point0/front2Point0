import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Task_Card from '../Components/Task_card';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() });

const taskAtts = { title: 'this is a test', category: 'house', sub_category: 'cleaning' }

test('renders the Task_card correctly', () => {
    const json = renderer
        .create(<Task_Card info={taskAtts} />)
        .toJSON();
    expect(json).toMatchSnapshot();
})

// NOTE: fake testing below


// <div className="theContainer">
//     { this.props.info.title ? `<h2 className="title">${this.props.info.title }</h2>` : ' '}
// </div>

// test('the title should display a h2 element', () => {
//     const wrapper = shallow(<Task_Card info={taskAtts} />);
//     const containerShallow = wrapper.find('.theContainer')
// })
