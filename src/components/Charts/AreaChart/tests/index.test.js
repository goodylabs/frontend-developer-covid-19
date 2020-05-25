/**
 *
 * Tests for AreaChart
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import AreaChart from '../index';

const defaultProps = {
  singleCountry: [
    {
      Active: 8454,
      City: '',
      CityCode: '',
      Confirmed: 10892,
      Country: 'Poland',
      CountryCode: '',
      Date: '2020-04-24T00:00:00Z',
      Deaths: 494,
      Lat: '0',
      Lon: '0',
      Province: '',
      Recovered: 1944,
    },
    {
      Active: 8623,
      City: '',
      CityCode: '',
      Confirmed: 11273,
      Country: 'Poland',
      CountryCode: '',
      Date: '2020-04-25T00:00:00Z',
      Deaths: 524,
      Lat: '0',
      Lon: '0',
      Province: '',
      Recovered: 2126,
    },
  ],
};

describe('<AreaChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<AreaChart {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<AreaChart {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
