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
});

describe("They have the same number of slashes and the same first part.", () => {
  it("Slide left if we don't provide an mdx array", () => {
    const result = getAnimation({
      previousPathname: "/blog/post-1/",
      pathname: "/blog/post-2/"
    });
    expect(result).toEqual(animations.slideLeft);
  });

  it("Slide left if the previous was published earlier", () => {
    const previousSlug = "/blog/post-1/";
    const nextSlug = "/blog/post-2/";
    const result = getAnimation({
      previousPathname: previousSlug,
      pathname: nextSlug,
      mdx: [
        { slug: previousSlug, published: "2019-08-23T06:00:00.284Z" },
        { slug: nextSlug, published: "2019-08-24T06:00:00.284Z" }
      ]
    });
    expect(result).toEqual(animations.slideLeft);
  });
  it("Slide right if the previous was published later", () => {
    const previousSlug = "/blog/post-1/";
    const nextSlug = "/blog/post-2/";
    const result = getAnimation({
      previousPathname: previousSlug,
      pathname: nextSlug,
      mdx: [
        { slug: previousSlug, published: "2019-08-24T06:00:00.284Z" },
        { slug: nextSlug, published: "2019-08-20T06:00:00.284Z" }
      ]
    });
    expect(result).toEqual(animations.slideRight);
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

  it('Fade in if current is "/posts/" and previous is undefined', () => {
    const result = getAnimation({ pathname: "/posts/" });
    expect(result).toEqual(animations.fadeIn);
  });
});
