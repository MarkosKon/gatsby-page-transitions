import animations from "./animations";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default ({ pathname, previousPathname = "/" }) => {
  const animationArray = Object.keys(animations);
  const randomNumber = getRandomInt(5);
  return animations[animationArray[randomNumber]];
};
