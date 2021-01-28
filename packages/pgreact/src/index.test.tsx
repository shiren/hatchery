import React from 'react';
import { render } from '@testing-library/react';

import Hello from './hello';

describe('Component test', () => {
  it('needs tests', () => {
    const { getByText } = render(<Hello />);

    expect(getByText('Hello World').nodeName).toEqual('H1');
  });
});
