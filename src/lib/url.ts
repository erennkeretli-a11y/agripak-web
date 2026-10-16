const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';

/** Prefix a site-root path ("/urunler/" or "img/x.png") with the configured base. */
export function u(path: string): string {
  return base + path.replace(/^\/+/, '');
}
