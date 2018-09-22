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
