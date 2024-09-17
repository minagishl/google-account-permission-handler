export default function checkUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    return (
      parsedUrl.protocol === 'https:' &&
      (hostname === 'google.com' || hostname.endsWith('.google.com'))
    );
  } catch {
    return false;
  }
}
