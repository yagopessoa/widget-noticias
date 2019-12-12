import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CardComponent } from '../PageComponents/Card';
import { Button, Divider } from '../Components/baseComponents';

describe('components interaction test', () => {
  const title = 'Lista';
  const isFetching = false;
  const hasMoreToFetch = true;
  const items = [];
  const fetchMoreNews = sinon.spy();

  configure({ adapter: new Adapter() });

  let props = { title, isFetching, hasMoreToFetch, items, fetchMoreNews };

  let fullWrapper = shallow(<CardComponent {...props} />);
  const button = fullWrapper.find(Button);

  it(`should call fetchMoreNews when button is clicked`, () => {
    expect(fetchMoreNews.callCount).toBe(0);
    button.props().onClick();
    expect(fetchMoreNews.callCount).toBe(1);
    button.props().onClick();
    expect(fetchMoreNews.callCount).toBe(2);
  });

  const rowsBefore = fullWrapper.find(Divider);
  it(`should render 0 'items' bofere adding more items`, () => {
    expect(rowsBefore.length).toBe(0);
  });

  props = {
    ...props,
    items: [
      {
        source: 'Globo',
        title: 'Festa vai rolar',
        link: 'g1.com',
        date: '01/01/2001'
      },
      {
        source: 'Uol',
        title: 'Uma noticia chocante',
        link: 'uol.com',
        date: '07/08/2011'
      }
    ]
  };

  fullWrapper = shallow(<CardComponent {...props} />);
  const rowsAfter = fullWrapper.find(Divider);
  it(`should render more items after 'items' is incremented`, () => {
    expect(rowsAfter.length).toBe(2);
  });
});
