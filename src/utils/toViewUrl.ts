export default function toViewUrl(url: string): string {
  // Remove any u/{number}/ pattern from the URL
  url = url.replace(/\/u\/\d+\//, '/');

  const googleFormsPattern =
    /https:\/\/docs\.google\.com\/forms\/d\/e\/([a-zA-Z0-9_-]+)(\/(?:edit|formrestricted))?/;

  const match = url.match(googleFormsPattern);
  if (match) {
    const id = match[1];
    return generateViewUrl(id);
  }

  return url;
}

function generateViewUrl(id: string): string {
  return `https://docs.google.com/forms/d/e/${id}/viewform`;
}
