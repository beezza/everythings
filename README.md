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


everythings.server.get("/", (req, res) => {
    res.send("Hello, World")
})

everythings.server.listen(3030)
```