Dev
===

Terminal:

```
# compile and watch
shadow-cljs watch app

# connect to REPL for the build (available while watch is running)
shadow-cljs cljs-repl app
```

IntelliJ:

> Run `npx shadow-cljs server` inside the Terminal provided by IntelliJ and use Clojure REPL → Remote Run Configuration to connect to the provided nREPL server (its port in the output and in target/shadow-cljs/nrepl.port).

Emacs: see https://shadow-cljs.github.io/docs/UsersGuide.html#cider

Tip:

> If the popular cider-nrepl is found on the classpath it will be added automatically. No additional configuration required.

### Start build, cljs REPL from the Shadow server repl:

(After having started `npx shadow-cljs server`.)

```clj
(shadow/watch :the-build)
(shadow/nrepl-select :the-build) ; this starts cljs repl
```

WIP
=======

Gatsby
------

**TODO:**

* ✅ modify the produced npm module to export React components
* ✅ use these from the pages - see https://github.com/reagent-project/reagent/blob/master/doc/InteropWithReact.md To simulate `export default ...` use `:exports-var` in the shadow config
* ✅ verify hot code reload - both reload (change in `main.cljs`) and cljs repl work
* ✅ Try to use non-cljs React component from cljs (eg layout - easier to add to existing prj, Gatsby's Link) - ok as long as plain .js, see below
* ❌ Try to use existing `layout.js` from Cljs so that we could define essentially the whole page in cljs, reusing existing code - failed, can require plain JS but not JSX => either rewrite to cljs or have a more involved wrapper .js file
* ✅ Create 2 separate pages: `/` and `/brand/tesla`
* ✅ Move `require("shadow.cljs.devtools.client.browser")` from `index.js` to a single place (webpack config???)
* Verify `:advanced` compilation
* GraphQL - how to integrate? (wrapper `<page>.js` with just `require`, element use, and a query?)
* Compare the size of a plain JS/TS and :advanced optimized Cljs apps

Bonus:

* Create pages 100% in cljs, w/o including a cljs-produced component in a `pages/*.js` - likely will need `createPages.js`?
* Hook running shadow-cljs into gatsby build

### Caveats

#### Require .js from .cljs: no JSX

This is possible (add the js src dir to `:source-paths`, require `"/path/to/file"`) but it only supports plain JS, not e.g. JSX.

Webpack
-------

Do:

```
cp assets/index.html dist
shadow-cljs watch app # term 1
npm run dev # term 2
# => go to http://localhost:8081/ # or 8080, see terminal
shadow-cljs cljs-repl app # for the REPL, after loading the page
```

Then edit main.cljs and see it in use.

Based on https://github.com/minimal-xyz/minimal-shadow-cljs-webpack.

**BEWARE:** You may need to config externs to make ``:advanced` mode work.
