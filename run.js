var
  babel = require("babel-core");

["ok", "not-ok"].forEach(function (version) {
  console.log(
    babel.transformFileSync("./" + version + "/index.js").code
  );
});
