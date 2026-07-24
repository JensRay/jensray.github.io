/**
 * Single source of truth for the GitHub Pages basePath (must match next.config.ts).
 * Plain <img> tags don't get basePath applied automatically the way next/image
 * or next/link do, so any hardcoded /public path needs to go through this.
 * Empty because this repo is a user site (jensray.github.io), served at the root.
 */
export const BASE_PATH = "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
