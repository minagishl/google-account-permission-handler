export default function checkUrl(url: string): boolean {
  const urlPattern = /^https:\/\/.*\.google\.com\/.+$/;
  return urlPattern.test(url);
}
