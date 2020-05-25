/**
 *
 * Tests for MapChart
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import MapChart from '../index';
import CustomTooltip from '../CustomTooltip';

describe('<MapChart />', () => {
  const defaultProps = {
    setTooltipContent: jest.fn(),
    countriesData: [
      {
        Country: 'Afghanistan',
        CountryCode: 'AF',
        Date: '2020-05-24T12:04:57Z',
        NewConfirmed: 782,
        NewDeaths: 11,
        NewRecovered: 44,
        Slug: 'afghanistan',
        TotalConfirmed: 9998,
        TotalDeaths: 216,
        TotalRecovered: 1040,
      },
      {
        Country: 'Albania',
        CountryCode: 'AL',
        Date: '2020-05-24T12:04:57Z',
        NewConfirmed: 8,
        NewDeaths: 0,
        NewRecovered: 6,
        Slug: 'albania',
        TotalConfirmed: 989,
        TotalDeaths: 31,
        TotalRecovered: 783,
      },
    ],
  };
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<MapChart {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<MapChart {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});

describe('<CustomTooltip />', () => {
  const defaultProps = {
    header: 'Country name',
    data: {
      totalConfirmed: 100,
      totalDeaths: 10,
      totalRecovered: 40,
    },
  };
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CustomTooltip {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot with data', () => {
    const {
      container: { firstChild },
    } = render(<CustomTooltip {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });

  it('Should render and match the snapshot without data', () => {
    const {
      container: { firstChild },
    } = render(<CustomTooltip header="No data" />);
    expect(firstChild).toMatchSnapshot();
  });
});
