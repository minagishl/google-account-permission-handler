export default function toViewUrl(url: string): string {
  const googleFormsPattern =
    /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)/;
  const googleEditPattern =
    /https:\/\/docs\.google\.com\/forms\/d\/([a-zA-Z0-9_-]+)\/edit/;

  const match = url.match(googleFormsPattern);
  if (match) {
    const id = match[1];
    return generateViewUrl(id);
  }

  const editMatch = url.match(googleEditPattern);
  if (editMatch) {
    const id = editMatch[1];
    return generateViewUrl(id);
  }

  return url;
}

function generateViewUrl(id: string): string {
  return `https://docs.google.com/forms/d/${id}/viewform`;
}
