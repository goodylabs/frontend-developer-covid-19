/**
 *
 * Tests for BarChart
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import BarChart from '../index';

const defaultProps = {
  globalData: {
    TotalConfirmed: 100,
    TotalDeaths: 10,
    TotalRecovered: 50,
  },
};

describe('<BarChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<BarChart {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<BarChart {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
