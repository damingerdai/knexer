const { series, src, dest, parallel} = require('gulp');
const { rollup } = require('rollup');
const sourcemap = require('rollup-plugin-sourcemaps');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const del = require('delete');
const ts = require('gulp-typescript');
var merge = require('merge2');
const tsProject = ts.createProject('tsconfig.json');

function clean(cb) {
  del(['dist'], cb);
}

function moveSourceFile() {
  return src('src/**/*?.ts')
    .pipe(dest('dist/src'))

}

function moveResourceFile() {
  return src(['*.json', '*.md', 'LICENSE'])
    .pipe(dest('dist/'))
}

function buildTypescript(cb) {
  const compiler = tsProject
    .src()
    .pipe(tsProject());
  return merge([
    compiler.js.pipe((dest('dist/src'))),
    compiler.dts.pipe((dest('dist/src')))
  ]);
}

async function buildByRollup(cd) {
  const bundle = await rollup({
    input: __dirname + '/dist/src/knexer.js',
    plugins: [
      sourcemap(),
      resolve({
        jsnext: true,
        main: true,
        browser: false
      }),
      commonjs()
    ]
  });
  return bundle.write({
    file: 'dist/knexer.js',
    format: 'umd',
    name: 'knexer',
    sourcemap: true,
    exports: 'named',
    amd: { id: 'knexer' }
  });
}

function cleanDist(cb) {
  // body omitted
  del(['dist/**/__tests__/**'], cb);
}

/// exports.build = build;
exports.default = series(clean, parallel(moveSourceFile, moveResourceFile), series(buildTypescript, buildByRollup), cleanDist)
