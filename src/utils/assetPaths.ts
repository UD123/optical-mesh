
/**
 * Helper function to get correct paths for assets regardless of deployment environment
 * Handles both GitHub Pages with subdirectory and custom domain scenarios
 */
export function getAssetPath(path: string): string {
  // If path already starts with http or //, it's an external URL
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }

  // Strip legacy prefix and any leading slash, then resolve against the app base
  const clean = path.replace(/^\/arcane-horizons\//, '/').replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || '/';
  return `${base.endsWith('/') ? base : base + '/'}${clean}`;
}
