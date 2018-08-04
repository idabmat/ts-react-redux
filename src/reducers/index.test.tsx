import { enthusiasm } from '.';
import { decrementEnthusiasm, incrementEnthusiasm } from '../actions';

it('increases the enthusiasm level', () => {
  const input = {
    enthusiasmLevel: 2,
    languageName: 'JS',
  }

  const output = {
    enthusiasmLevel: 3,
    languageName: 'JS',
  }

  expect(enthusiasm(input, incrementEnthusiasm())).toEqual(output);
})

it('decreases the enthusiasm level', () => {
  const input = {
    enthusiasmLevel: 2,
    languageName: 'JS',
  }

  const output = {
    enthusiasmLevel: 1,
    languageName: 'JS',
  }

  expect(enthusiasm(input, decrementEnthusiasm())).toEqual(output);
})

it('does not decreases enthusiasm level below 1', () => {
  const input = {
    enthusiasmLevel: 1,
    languageName: 'JS',
  }

  expect(enthusiasm(input, decrementEnthusiasm())).toEqual(input);
})
