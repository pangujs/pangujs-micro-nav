const render = ($) => {
  // $("#purehtml-container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global["pangujs-micro-nav"] = {
    bootstrap: () => {
      console.log("pangujs-micro-nav bootstrap");
      return Promise.resolve();
    },
    mount: () => {
      console.log("pangujs-micro-nav mount");
      return render($);
    },
    unmount: () => {
      console.log("pangujs-micro-nav unmount");
      return Promise.resolve();
    },
  };
})(window);
