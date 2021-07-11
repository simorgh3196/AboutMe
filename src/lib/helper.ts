export function getHostFromURL(str: string): string {
  const url = new URL(str);
  return url?.hostname || "blog";
}

export function getFaviconSrcFromHostname(hostname: string): string {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
