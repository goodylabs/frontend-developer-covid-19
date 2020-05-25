/**
 *
 * Tests for GlobalStatistics
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import GlobalStatistics from '../index';

const defaultProps = {
  globalData: {
    TotalConfirmed: 100,
    TotalDeaths: 10,
    TotalRecovered: 50,
  },
};

describe('<GlobalStatistics />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<GlobalStatistics {...defaultProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<GlobalStatistics {...defaultProps} />);
    expect(firstChild).toMatchSnapshot();
  });
});
