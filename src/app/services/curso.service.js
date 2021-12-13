//Biblioteca do sequelize 
const Sequelize = require("sequelize");
//Operadores do sequelize
const Op = Sequelize.Op;

//Inicializando as models e as recebendo
const { initModels } = require("../models/init-models");
var { curso } = initModels(sequelize);

//Validators
const validators = require("../validators/servico.validator");

module.exports = {

    findAllDeps: async (enabled) => {
       const cursos = await curso.findAll({
           where: { ativado: enabled }
        });

       return cursos;
    },

    findCursoByPk: async (id) => {
        const cursos = await curso.findByPk(id);

        return cursos;
    },

    createCurso: async ({ params }) => {
        const cursos = await curso.create(params);

        return cursos;
    },

    updateCurso: async ({ course, param }) => {
        const updated = await course.update(param);
        return updated;
    },

    destroyDep: async () => {
        return "Método não implementado!";
    },
};