const { authJwt } = require("../middlewares");
const controller = require("../controllers/servico.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "accessToken, Origin, Content-Type, Accept"
    );
    next();
  });

  ////ADMIN 

  //GET

  //Exibindo serviços para o Administrador
  app.get("/services", [authJwt.validateToken, authJwt.isAdmin], controller.servicosGet);

  //Exibindo serviços para o Administrador
  app.get("/service/:id/type=:type", [authJwt.validateToken, authJwt.isAdmin], controller.servicosGetByPk);

  //POST

  app.post("/service/type=:type", [authJwt.validateToken, authJwt.isAdmin], controller.servicosPost);

  //PUT

  //Alterando quantidade e valor unitário do serviço
  app.put("/service/:id/type=:type", [authJwt.validateToken, authJwt.isAdmin], controller.servicosPut);
};