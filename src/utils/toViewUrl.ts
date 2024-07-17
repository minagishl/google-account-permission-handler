export default function toViewUrl(url: string): string {
  const googleFormsPattern =
    /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)/;
  const match = url.match(googleFormsPattern);
  if (match) {
    const id = match[1];
    return `https://docs.google.com/forms/d/e/${id}/viewform`;
  }
  return url;
}
