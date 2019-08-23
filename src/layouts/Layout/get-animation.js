import animations from "./animations";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomAnimation() {
  const animationArray = Object.keys(animations);
  const randomNumber = getRandomInt(animationArray.length);
  return animations[animationArray[randomNumber]];
}

export default ({ pathname, previousPathname = "/" }) => {
  return getRandomAnimation();
};
