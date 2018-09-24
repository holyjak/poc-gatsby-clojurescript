module.exports = function prependCljsDevSetup(sourceCode) {
    // NOTE: The file is found because we add src-extra to the node path in Webpack
    return "require('setup-cljs-dev-support.js');" + sourceCode;
}
