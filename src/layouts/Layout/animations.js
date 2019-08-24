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
        opacity: 0;
        transform: translateX(500px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
  slideRight: keyframes`
      from {
        opacity: 0;
        transform: translateX(-500px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
  slideDown: keyframes`
      from {
        opacity: 0;
        transform: translateY(-500px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  slideUp: keyframes`
      from {
        opacity: 0;
        transform: translateY(500px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `
};
