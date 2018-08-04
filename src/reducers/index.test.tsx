import { enthusiasm } from '.';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions';

it('increases the enthusiasm level', () => {
  const input = {
    languageName: 'JS',
    enthusiasmLevel: 2
  }

  const output = {
    languageName: 'JS',
    enthusiasmLevel: 3
  }

  expect(enthusiasm(input, incrementEnthusiasm())).toEqual(output);
})

it('decreases the enthusiasm level', () => {
  const input = {
    languageName: 'JS',
    enthusiasmLevel: 2
  }

  const output = {
    languageName: 'JS',
    enthusiasmLevel: 1
  }

  expect(enthusiasm(input, decrementEnthusiasm())).toEqual(output);
})

it('does not decreases enthusiasm level below 1', () => {
  const input = {
    languageName: 'JS',
    enthusiasmLevel: 1
  }

  expect(enthusiasm(input, decrementEnthusiasm())).toEqual(input);
})
