import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './components/App';
import SearchCountries from './components/SearchCountries';
import SearchCountryItem from './components/SearchCountryItem';
import CountryStats from './components/CountryStats';


configure({ adapter: new Adapter() });

it('includes SearchCountries', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<SearchCountries />)).toEqual(true)
});


it('includes CountryStats', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<CountryStats />)).toEqual(true)
});