import React from 'react';
import { shallow, mount, render } from 'enzyme';

import hotels from "./hotels.json";
import App from './App';
import Filters from "./components/Filters";
import Hotel from "./components/Hotel";

it(`renders all ${hotels.length} hotels`, () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.hotel').length).toBe(hotels.length);
});

it('Car filter button has active class on click', () => {
  const wrapper = mount(<App />);  
  wrapper.find('button').at(0).simulate('click');

  expect(wrapper.find('button').at(0).hasClass('filter__item--active')).toBe(true);
});

it('Shows 3 hotels when filtered by gym', () => {
  const wrapper = mount(<App />);
  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.find('.hotel').length).toBe(3);
});

it('Shows 5* hotel when sorted by highest first', () => {
  const wrapper = mount(<App />);
  
  wrapper.find('select').simulate('change', {
    target: { value: 'ASC' }
  });

  expect(wrapper.find('.hotel').at(0).find('.hotel__name').html()).toContain('hotelone');
});
