import { formatDate, formatTime } from '../date';

test('should format date', () => {
  expect(formatDate('2023-09-10T23:30:00Z')).toEqual('10/09/2023');
});

test('should format time', () => {
  expect(formatTime(4111000)).toEqual('1:08:31');
  expect(formatTime(3470000)).toEqual('57:50');
});
