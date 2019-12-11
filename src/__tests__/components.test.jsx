import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import * as StyledComponents from '../Components/baseComponents';
import Select from '../Components/select';

describe('AddressForm styled components test', () => {
  configure({ adapter: new Adapter() });
  const mockChild = 'mock';

  Object.keys(StyledComponents).forEach(componentName => {
    const Component = StyledComponents[componentName];
    it(`should render ${componentName} correctly`, () => {
      const wrapper = shallow(<Component>{mockChild}</Component>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it(`should render Select correctly`, () => {
    const wrapper = shallow(
      <Select>
        <option value="">Filtrar por fonte</option>
        <option value="Opção 1">Opção 1</option>
        <option value="Opção 2">Opção 2</option>
        <option value="Opção 3s">Opção 3</option>
      </Select>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
