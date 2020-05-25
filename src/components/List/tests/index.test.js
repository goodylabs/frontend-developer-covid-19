/**
 *
 * Tests for List
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import List from '../index';

const defaultProps = {
  selectCountry: jest.fn(),
  filteredCountries: [
    {
      Country: 'Poland',
      CountryCode: 'PL',
      Date: '2020-05-24T11:44:37Z',
      NewConfirmed: 312,
      NewDeaths: 11,
      NewRecovered: 246,
      Slug: 'poland',
      TotalConfirmed: 20931,
      TotalDeaths: 993,
      TotalRecovered: 8977,
    },
  ],
};

describe('<List />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<List {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<List {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
