if (process.env.NODE_ENV !== "production") {
  window["$CLJS"] = require("./target/cljs_env");
  require("./target/shadow.cljs.devtools.client.browser");
}

// here's how you include CSS
//require('./main.css');

var brand = require('./target/app.templates.brand.js');
var main = require('./target/app.main');

var app;

window.onload = function() {
  // init is only ever called once
  main.init();
  app = main.start();
  brand.run();
};

if (module.hot) {
  module.hot.accept('./target/app.main', function() {
    // stop currently running version
    main.stop(app);
    main = require('./target/app.main');
    app = main.start();
    brand = require('./target/app.templates.brand.js');
    brand.run();
  });
}
