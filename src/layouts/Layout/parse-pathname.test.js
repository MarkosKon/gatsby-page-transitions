import parsePathname from "./parse-pathname";

describe("parsePathname tests:", () => {
  it('Parses the root pathname "/".', () => {
    const [slashNumber, firstPart] = parsePathname("/");
    expect(slashNumber).toEqual(1);
    expect(firstPart).toEqual(null);
  });

  it('Parses the "/blog/" pathname.', () => {
    const [slashNumber, firstPart] = parsePathname("/blog/");
    expect(slashNumber).toEqual(2);
    expect(firstPart).toEqual("blog");
  });

  // Kind of stupid.
  it('Parses the uppercase "/BLOG/" pathname.', () => {
    const [slashNumber, firstPart] = parsePathname("/BLOG/");
    expect(slashNumber).toEqual(2);
    expect(firstPart).toEqual("blog");
  });

  it("Adds an extra slash at the end if is missing.", () => {
    const [slashNumber, firstPart] = parsePathname("/blog");
    expect(slashNumber).toEqual(2);
    expect(firstPart).toEqual("blog");
  });

  it("Parses a pathname with 2 parts.", () => {
    const [slashNumber, firstPart] = parsePathname("/blog/post-1/");
    expect(slashNumber).toEqual(3);
    expect(firstPart).toEqual("blog");
  });

  it("Parses a pathname with 3 parts.", () => {
    const [slashNumber, firstPart] = parsePathname("/blog/post-1/2018-07-22");
    expect(slashNumber).toEqual(4);
    expect(firstPart).toEqual("blog");
  });
});

describe("parsePathname edge cases:", () => {
  it("Throws if the pathname is null.", () => {
    expect(() => {
      parsePathname(null);
    }).toThrow("The pathname is not a string");
  });

  it("Throws if the pathname is a number.", () => {
    expect(() => {
      parsePathname(1);
    }).toThrow("The pathname is not a string");
  });

  it("Throws if the pathname doesn't start with a slash.", () => {
    expect(() => {
      parsePathname("notes/");
    }).toThrow("The pathname doesn't start with a slash");
  });
});
