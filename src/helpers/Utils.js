export const readingTime = (text) => {
  const wordsPerMinute = 275;
  const noOfWords = text.trim().split(/\s+/).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.round(minutes);

  if (readTime < 1) {
    return 'less than a minute read';
  }
  return `~${readTime} min read`;
};
