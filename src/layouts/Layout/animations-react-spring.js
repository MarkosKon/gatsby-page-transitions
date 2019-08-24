export default {
  fadeIn: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  },
  slideLeft: {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0 }
  },
  slideRight: {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0 }
  },
  slideDown: {
    from: { opacity: 0, transform: "translateY(-500px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0 }
  },
  slideUp: {
    from: { opacity: 0, transform: "translateY(500px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0 }
  }
};
