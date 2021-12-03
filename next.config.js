module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/admin/:path*',
          destination: '/studio/index.html'
        }      
      ]
    }
}

}
