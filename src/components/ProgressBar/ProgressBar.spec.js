import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {

  test('getwidthas percentof total width should return 250 width', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={100} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(50);

  });

});
