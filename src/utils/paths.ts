// deno-lint-ignore-file no-window

/**
 * Get pathname from current path.
 *
 * @returns {string} Path
 */
export const currentPath = () => window.location.pathname;

/**
 * Update pathname of current location.
 *
 * @param {string} newPath - Updated pathname
 */
export const changePath = (newPath: string) => window.location.assign(newPath);

/**
 * Split pathname into array of strings. Default separator is '/'.
 *
 * @param {string} path - Pathname portion of URL object
 * @returns {string[]} Pathname parts
 */
export const getPathParts = (path: string, separator = "/") =>
  path.split(separator).filter((el) => !!el);

/**
 * Merge pathname chunks into one string, with separator between chunks. Default separator is '/'.
 *
 * @param {string[]} pathParts - Pathname chunks
 * @param {string} [separator]  - Separator
 * @returns {string} Pathname merged from parts
 */
export const joinPathParts = (pathParts: string[], separator = "/") =>
  pathParts.join(separator);

/**
 * Swicth language to passed language
 *
 * @param lang {string} - Language to swicth pathaname to
 */
export const swicthLangInPath = (lang: string) => {
  const pathArray = getPathParts(currentPath());
  pathArray[0] = lang;
  const newPath = joinPathParts(pathArray);
  changePath(newPath);
};

/**
 * Check if paths are matching each other, without taking separators into consideration.
 *
 * @param {string} path - first path to camparison
 * @param {string} match - path to match to
 * @returns {boolean}
 */
export const checkPathsMatch = (path: string, match: string) => {
  const splitPath = getPathParts(path);
  const splitMatch = getPathParts(match);

  if (splitPath.length !== splitMatch.length) return false;

  for (let i = 0; i < splitPath.length; i++) {
    if (splitPath[i] !== splitMatch[i]) return false;
  }

  return true;
};
