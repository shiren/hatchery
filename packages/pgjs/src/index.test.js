import MyClass from '@src/index';

describe('MyClass', () => {
  it('could returns pField value using getPField() ', () => {
    expect(new MyClass().getPField()).toEqual('hello');
  });
});
