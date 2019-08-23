import getAnimation from "./get-animation";
import animations from "./animations";

describe("getAnimation tests:", () => {
  it("Fade in if the current and the previous have the same number of slashes.", () => {
    const result = getAnimation({
      previousPathname: "/notes/",
      pathname: "/blog/"
    });
    expect(result).toEqual(animations.fadeIn);
  });

  it("Slide up if the current has MORE slashes that the previous.", () => {
    const result = getAnimation({ previousPathname: "/", pathname: "/blog/" });
    expect(result).toEqual(animations.slideUp);
  });

  it('Slide up if the current has MORE slashes that the previous (not "/").', () => {
    const result = getAnimation({
      previousPathname: "/blog/",
      pathname: "/blog/post-1"
    });
    expect(result).toEqual(animations.slideUp);
  });

  it("Slide down if the current has LESS slashes that the previous.", () => {
    const result = getAnimation({ previousPathname: "/notes/", pathname: "/" });
    expect(result).toEqual(animations.slideDown);
  });

  //   Temporary fix until we figure out the order
  it("Slide left if they have the same number of slashes and the same first part.", () => {
    const result = getAnimation({
      previousPathname: "/blog/post-1/",
      pathname: "/blog/post-2/"
    });
    expect(result).toEqual(animations.slideLeft);
  });
});

describe("Edge cases:", () => {
  it('Fade in if current is "/" and previous is undefined', () => {
    const result = getAnimation({ pathname: "/" });
    expect(result).toEqual(animations.fadeIn);
  });

  it('Fade in if current is "/" and previous is "/"', () => {
    const result = getAnimation({ previousPathname: "/", pathname: "/" });
    expect(result).toEqual(animations.fadeIn);
  });
});
