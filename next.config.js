module.exports = {
  async rewrites() {
    return [
      {
        //new route
        source: '/avocado/:path*',
        // where come from
        destination: '/product/:path*',
      },
    ];
  },
};
