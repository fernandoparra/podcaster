import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

it('should return null the first time', () => {
  const { result } = renderHook(() => useLocalStorage('key1'));
  const [value] = result.current;

  expect(value).toBe(null);
});

it('should save value and get the saved value', () => {
  const { result } = renderHook(() => useLocalStorage('key1'));
  const [value, setValue] = result.current;

  act(() => {
    setValue({value: 'value1'});
  });

  const localValue = localStorage.getItem('key1') || 'null';
  const localValueParsed = JSON.parse(localValue);

  expect(localValueParsed).toEqual({value: 'value1'});
});
