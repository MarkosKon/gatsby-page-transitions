import animations from "./animations";
import parsePathname from "./parse-pathname";

export default ({ previousPathname, pathname, mdx = [] }) => {
  const [previousSlashes, previousFirstPart] = parsePathname(
    previousPathname || "/"
  );
  const [currentSlashes, currentFirstPart] = parsePathname(pathname);

  if (!previousPathname) return animations.fadeIn;
  if (
    previousSlashes === currentSlashes &&
    currentFirstPart &&
    previousFirstPart &&
    previousFirstPart === currentFirstPart
  ) {
    const previousMDX = mdx.find(m => m.slug === previousPathname);
    const nextMDX = mdx.find(m => m.slug === pathname);
    if (previousMDX && nextMDX) {
      return previousMDX.published < nextMDX.published
        ? animations.slideLeft
        : animations.slideRight;
    }
    return animations.slideLeft;
  }
  if (previousSlashes < currentSlashes) return animations.slideUp;
  if (previousSlashes > currentSlashes) return animations.slideDown;

  return animations.fadeIn;
};
