var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var child = require('child_process');
var mocha = require('gulp-mocha');
var typedoc = require("gulp-typedoc");


var paths = {
    dist: 'dist',
    logs: 'logs/*',
    tsSources: 'src/**/*.ts',
    testSources: 'test/**/*.js'
};



gulp.task("typedoc", function () {
    //
    //  "doc": "typedoc --theme minimal --hideGenerator --includeDeclarations --excludeExternals --excludePrivate --excludeNotExported  --out ./doc ./src"
    //
    return gulp
        .src([paths.tsSources])
        .pipe(typedoc({
            // TypeScript options (see typescript docs)
            module: "commonjs",
            target: "es2017",

            includeDeclarations: true,
            excludePrivate: true,
            excludeProtected: true,
            excludeExternals: true,
            readme: 'doc.md',
            hideGenerator: true,
            exclude: ['*/**/index.ts'],
            // Output options (see typedoc docs)
            out: "./doc",
            json: "./doc.json",

            // TypeDoc options (see typedoc docs)
            name: "Serendip Utility",
            // theme: "minimal",
            theme: "markdown",
            ignoreCompilerErrors: false,
            version: true
        }))

});

// clean dist folder
gulp.task('clean', function (cb) {

    return gulp.src(paths.dist, { read: false })
        .pipe(clean());
});



gulp.task('test', ['ts'], function () {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }));
});


// compile typescripts
gulp.task('ts', function () {

    return gulp.src(paths.tsSources)
        .pipe(ts({
            noImplicitAny: false,
            target: 'es3',
            sourceMap: true,
            module: 'CommonJS',
            baseUrl: ".",
            paths: {
                "*": [
                    "node_modules/*",
                    "src/types/*"
                ]
            }
        }))
        .pipe(gulp.dest(paths.dist));

});

// whats typescripts , compile and then run
gulp.watch(paths.tsSources, ['run']);
gulp.watch(paths.testSources, ['run']);


// clean before build
gulp.task('preBuild', ['clean']);

// clean and compile
gulp.task('build', ['preBuild', 'ts'], function () {


});


// compile and run node process 
gulp.task('run', ['test']);


gulp.task('default',
    [
        'build',
        'run'
    ], function () {


    });