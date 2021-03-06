#!/usr/bin/shjs
/*jshint esnext: true */
require('shelljs/global');

// https://github.com/bcoe/yargs/issues/201
var argv = require('yargs')
  .usage('Usage: (sudo) $0 [options]')
  .option('g', {
    demand: false,
    describe: 'Used by Travis CI.',
    type: 'boolean'
  })
  .argv;

if( env['TRAVIS_PULL_REQUEST'] === 'true' ) {
  echo('This is PR, exiting.');
  exit(0);
}

exec('pandoc -sS ./math.md --mathjax --number-sections -H html_head.html' +
     ' -A html_foot.html' +
     ' -c stylesheets/stylesheet.css -o ./out/math.html ' +
     '--bibliography=./test.bib -F pandoc-crossref --filter pandoc-numbering');
console.log('Build complete.');

if( argv.g ) {
  console.log('Travis CI building...');

  cd('out/stylesheets/');
  exec('node-sass --source-map true stylesheet.sass stylesheet.css');
  cd('../../');

  exec('rm -rf ../gh-pages');

  exec('git clone -b gh-pages https://${GH_TOKEN}@github.com/amacfie/ci_pandoc_test.git ../gh-pages');

  // copy generated HTML site to `master' branch
  exec('cp -R ./out/* ../gh-pages');

  // commit and push generated content to `master' branch
  // since repository was cloned in write mode with token auth - we can push there
  cd('../gh-pages');
  exec('git config user.email "amacfie@sent.com"');
  exec('git config user.name "Andrew MacFie"');
  exec('git add -A .');
  exec('git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"');
  exec('git push origin gh-pages');
}

