const request = require("sync-request")

class Request {
    get = function (url) {
        const res = request("GET", url)
        return res.body.toString()
    }
    post = function (url) {
        const res = request("POST", url)
        return res.body.toString()
    }
}
module.exports = {
    Request : Request
}