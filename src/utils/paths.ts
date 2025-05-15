// deno-lint-ignore-file no-window

/**
 * Get pathname from current path
 * 
 * @returns Path {string}
 */
export const currentPath = () => window.location.pathname;

/**
 * Update pathname of current location
 * 
 * @param newPath {string} - updated pathname
 */
export const changePath = (newPath: string) => window.location.assign(newPath);

export const swicthLangInPath = (lang: string) => {
  const pathArray = currentPath().split("/").filter(el => !!el)
  pathArray[0] = lang

  return pathArray.join("/")
}