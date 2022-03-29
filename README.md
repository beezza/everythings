# Everythings - Useful Tools For Nodejs

## Install
### NPM:
```shell
$ npm i everythings
```
### Yarn:
```shell
$ yarn add everythings
```
# 1. Web Server
```javascript
const everythings = require("everythings")


const server = everythings.server()

server.get("/", (req, res) => {
    res.send("Hello, World")
})

server.listen(3030)
```
# 2.Request
```javascript
const everythings = require("everythings")


const res = everythings.requests.get("https://www.beezza.net")
console.log(res)
```