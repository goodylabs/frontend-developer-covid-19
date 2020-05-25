/**
 *
 * Tests for Heading
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Heading from '../index';

describe('<Heading />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Heading>Children</Heading>);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render not main hedaer and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Heading>Children</Heading>);
    expect(firstChild).toMatchSnapshot();
  });

  it('Should render main header and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Heading main>Children</Heading>);
    expect(firstChild).toMatchSnapshot();
  });
});
