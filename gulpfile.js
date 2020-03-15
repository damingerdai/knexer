const { series, src, dest } = require('gulp');
const del = require('delete');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  del(['dist'], cb);
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function move(cb) {
    return src('src/**/*.ts')
    .pipe(dest('dist/src'))
}

function build(cb) {
    console.log(tsProject);
    return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest("dist"));
}

exports.build = build;
exports.default = series(clean, move, build)