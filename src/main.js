/*Load Classes*/
const RequestClass = require("./class/request").Request
const ServerClass = require("./class/server").Server

/*- - - - - -*/

module.exports = {
    pwd : process.cwd().toString(),
    requests : {
        get : function (url) {
            return new RequestClass().get(url)
        },
        post : function (url) {
            return new RequestClass().post(url)
        },
    },
    server : new ServerClass().app
}