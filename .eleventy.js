module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
