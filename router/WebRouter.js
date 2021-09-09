const express = require("express");
const router = express.Router();   

// #라우터 내보냄
module.exports = (app) => {
    router.get(["/friends/list", "/friends"], (req, resp) => {
        resp.status(200)
          .contentType("text.html;charset=UTF-8")
          .send("<p>Web Router 응답</p>");
    });

    return router;  // #라우터 돌려줌
}