(function () {
    "use strict";

    var finalhandler = require("finalhandler"),
        http = require("http"),
        serveStatic = require("serve-static"),
        serve = serveStatic(__dirname),
        server = http.createServer(function (req, res) {
            var done = finalhandler(req, res);
                serve(req, res, done);
        });

    server.listen(3080);
}());
