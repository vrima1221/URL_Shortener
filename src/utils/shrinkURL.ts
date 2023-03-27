export const shrinkURL = (url: string) => {
  const shortURL = `${url.replace(/[^a-z]/g, '').slice(-6)}`;

  return shortURL;
};
