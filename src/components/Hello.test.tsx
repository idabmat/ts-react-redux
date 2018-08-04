import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});

it('calls onDecrement when clicking on the - button', () => {
  const mockedDecrement = jest.fn();
  const hello = enzyme.shallow(<Hello name='Daniel', onDecrement={mockedDecrement} />);
  hello.find('.decrement').simulate('click');
  expect(mockedDecrement.mock.calls.length).toBe(1);
});

it('calls onIncrement when clicking on the + button', () => {
  const mockedIncrement = jest.fn();
  const hello = enzyme.shallow(<Hello name='Daniel', onIncrement={mockedIncrement} />);
  hello.find('.increment').simulate('click');
  expect(mockedIncrement.mock.calls.length).toBe(1);
});
