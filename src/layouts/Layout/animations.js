import { keyframes } from "@emotion/core";

export default {
  fadeIn: keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `,
  slideLeft: keyframes`
      from {
        transform: translateX(500px);
      }
      to {
        transform: translateX(0);
      }
    `,
  slideRight: keyframes`
      from {
        transform: translateX(-500px);
      }
      to {
        transform: translateX(0);
      }
    `,
  slideDown: keyframes`
      from {
        transform: translateY(-500px);
      }
      to {
        transform: translateY(0);
      }
    `,
  slideUp: keyframes`
      from {
        transform: translateY(500px);
      }
      to {
        transform: translateY(0);
      }
    `
};
