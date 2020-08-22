import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionsProp = [
    { 
      title: 'AE Houseman',
      content: 'Good creatures, do you love your lives / Here is a knife like other knives',
    },
    { 
      title: 'Penelope Gilliat',
      content: 'For years the thought of you scorched my eyeballs / Now all is well under the scalding sun.',
    },
    { title: 'Elinor Wylie',
      content: 'In masks outrageous and austere / The years go by in single file; / But none has merited my fear, / And none has quite escaped my smile.',
    }
  ];

describe(`Accordion Component`, () => {
    it(`renders empty given no Accordion without errors`, () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it(`renders no sections by default`, () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot
    })

    it(`renders one section when one section is selected`, () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it(`only renders one section at a time`, () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).siumulate('click')
        expected(toJson(wrapper)).toMatchSnapshot()
    })
    
})