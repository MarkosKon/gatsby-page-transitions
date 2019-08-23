import animations from "./animations";
import parsePathname from "./parse-pathname";

export default ({ previousPathname, pathname }) => {
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
  )
    return animations.slideLeft;
  if (previousSlashes < currentSlashes) return animations.slideUp;
  if (previousSlashes > currentSlashes) return animations.slideDown;

  return animations.fadeIn;
};
