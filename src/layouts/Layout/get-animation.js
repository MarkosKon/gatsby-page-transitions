import animations from "./animations";
import parsePathname from "./parse-pathname";

export default ({ previousPathname = "/", pathname }) => {
  const [previousSlashes, previousFirstPart] = parsePathname(previousPathname);
  const [currentSlashes, currentFirstPart] = parsePathname(pathname);
  if (previousSlashes < currentSlashes) return animations.slideUp;
  if (previousSlashes > currentSlashes) return animations.slideDown;
  if (
    previousSlashes === currentSlashes &&
    currentFirstPart &&
    previousFirstPart === currentFirstPart
  )
    return animations.slideLeft;
  return animations.fadeIn;
};
