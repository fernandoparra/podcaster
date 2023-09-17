export const formatDate = (date: string) => {
  const d = date.slice(0, 10).split('-').reverse();
  return d.join('/');
};

export const formatTime = (ms: number) => {
  let time = new Date(ms).toISOString().slice(11, 19);
  const [h, m, s] = time.split(':');
  if(Number(h) > 0) {
    return `${Number(h)}:${m}:${s}`;
  } else {
    return `${Number(m)}:${s}`;
  }
};
