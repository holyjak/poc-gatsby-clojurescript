if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("../compiled/cljs_env");
  require("../compiled/shadow.cljs.devtools.client.browser");
}

// here's how you include CSS
//require('./main.css');

var main = require('../compiled/app.main');

var app;

window.onload = function() {
  // init is only ever called once
  main.init();
  app = main.start();
};

if (module.hot) {
  module.hot.accept('../compiled/app.main', function() {
    // stop currently running version
    main.stop(app);
    main = require('../compiled/app.main');
    app = main.start();
  });
}
