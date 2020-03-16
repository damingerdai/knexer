const { series, src, dest } = require('gulp');
const { rollup } = require('rollup');
const sourcemap = require('rollup-plugin-sourcemaps');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const del = require('delete');
const ts = require('gulp-typescript');
var merge = require('merge2');
const tsProject = ts.createProject('tsconfig.json');

function clean(cb) {
    // body omitted
    del(['dist'], cb);
}

function move(cb) {
    return src('src/**/*.ts')
        .pipe(dest('dist/src'))
}

function build(cb) {
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
        input: 'dist/src/index.js',
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

exports.build = build;
exports.default = series(clean, move, build, buildByRollup)