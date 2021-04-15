const { src, dest, series, watch } = require(`gulp`);
const babel = require(`gulp-babel`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const browserSync = require(`browser-sync`);

async function firefox () {
    browserChoice = `firefox`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function allBrowsers () {
    browserChoice = [
        `firefox`,
        `google chrome`
    ];
}

let compressHTML = () => {
    return src([`dev/**/*.html`,`dev/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let validateHTML = () => {
    return src([
        `dev/html/*.html`,
        `dev/html/**/*.html`])
        .pipe(htmlValidator());
};

let lintCSS = () => {
    return src(`dev/css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let compileCSSForProd = () => {
    return src(`dev/styles/main.scss`)
        .pipe(sass({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`prod/styles`));
};

let transpileJSForDev = () => {
    return src(`dev/scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let lintJS = () => {
    return src(`dev/scripts/*.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: `module`
            },
            rules: {
                indent: [2, 4, {SwitchCase: 1}],
                quotes: [2, `backtick`],
                semi: [2, `always`],
                'linebreak-style': [2, `unix`],
                'max-len': [1, 85, 4]
            },
            env: {
                es6: true,
                node: true,
                browser: true
            },
            extends: `eslint:recommended`
        }))
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 1,
        server: {
            baseDir: [
                `dev`
            ]
        }
    });

    watch(`dev/js/*.js`,
        series(lintJS)
    ).on(`change`, reload);

    watch(`dev/css/**/*.scss`,
        series(lintCSS)
    ).on(`change`, reload);

    watch(`dev/**/*.html`,
        series(validateHTML)
    ).on(`change`, reload);

};

exports.firefox = series(firefox, serve);
exports.chrome = series(chrome, serve);
exports.allBrowsers = series(allBrowsers, serve);
exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
