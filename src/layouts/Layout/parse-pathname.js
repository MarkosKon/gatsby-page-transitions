export default pathname => {
  if (typeof pathname !== "string") throw Error("The pathname is not a string");
  if (!/^\//.test(pathname))
    throw Error("The pathname doesn't start with a slash");
  const slashes = pathname.match(/(\/)+/gi);
  const firstPart = pathname.match(/([a-z]+)/gi);
  const endsWithSlash = /\/$/.test(pathname);
  const slashNumber = endsWithSlash ? slashes.length : slashes.length + 1;
  return [slashNumber, firstPart && firstPart[0].toLowerCase()];
};
