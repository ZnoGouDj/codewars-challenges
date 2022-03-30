function domainName(url: string): string {
  return url.replace(/.+\/\/|www.|\..+/g, '');
}
