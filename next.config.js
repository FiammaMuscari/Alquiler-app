const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      "images.ctfassets.net",
      "cdn-italiani-media.italiani.it",
      "cf.bstatic.com",
      "th.bing.com",
      "i.pinimg.com",
      "videos.ctfassets.net",
    ],
  },
};
