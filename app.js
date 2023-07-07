const http = require("http")

http.createServer(async (req, res) => {

    res.setHeader("Content-Type", "aplication/json");
    if (req.url === "/tasks" && req.method == "GET") {
        res.statusCode = 400
        res.end(JSON.stringify)
        const todos = []
    }
})
