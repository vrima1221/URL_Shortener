export const shrinkURL = (url: string) => {
  const shortURL = `short.ly/${url.replace(/[^a-z]/g, '').slice(-4)}`;

  return shortURL;
};
