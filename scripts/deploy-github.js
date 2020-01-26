
const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/craig-joseph-lucas/the-victory-is-yours',
  },
  () => {
    console.log('Deploy Complete!')
  }
)