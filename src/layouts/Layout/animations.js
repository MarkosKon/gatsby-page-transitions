export default {
  fadeIn: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  },
  slideLeft: {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-100%, 0)" }
  },
  slideRight: {
    from: { opacity: 0, transform: "translate(-100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(100%, 0)" }
  },
  slideDown: {
    from: { opacity: 0, transform: "translate(0, -100%)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, 100%)" }
  },
  slideUp: {
    from: { opacity: 0, transform: "translate(0, 100%)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, -100%)" }
  }
};
