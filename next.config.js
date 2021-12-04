module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://sanity-nextjs-js-boilerplate.sanity.studio',
        permanent: true,
      },
    ]
  }

}
