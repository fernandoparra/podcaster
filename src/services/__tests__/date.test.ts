import { checkDifference, formatDate, formatTime } from '../date';

test('should format date', () => {
  expect(formatDate('2023-09-10T23:30:00Z')).toEqual('10/09/2023');
});

test('should format time', () => {
  expect(formatTime(4111000)).toEqual('1:08:31');
  expect(formatTime(3470000)).toEqual('57:50');
});

test('should return 00:00 when ms is invalid', async () => {
  expect(formatTime()).toEqual('00:00');
});

test('should return true if the time difference is less than ms', () => {
  const ms = 1000 * 60 * 60 * 24; // 1 day

  const date = new Date();
  date.setHours(date.getHours() - 1); // 1 hour before now

  const result = checkDifference(date.toISOString(), ms);

  expect(result).toBe(true);
});

test('should return false if the difference is greater than ms', () => {
  const ms = 1000 * 60 * 60 * 24; // 1 day

  const date = new Date();
  date.setDate(date.getDate() - 2); // 2 days before now
  const result = checkDifference(date.toISOString(), ms);

  expect(result).toBe(false);
});
