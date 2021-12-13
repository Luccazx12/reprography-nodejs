//Biblioteca do sequelize 
const Sequelize = require("sequelize");
//Operadores do sequelize
const Op = Sequelize.Op;

//Inicializando as models e as recebendo
const { initModels } = require("../models/init-models");
var { centro_custos } = initModels(sequelize);

module.exports = {

    findAllDeps: async (enabled) => {
        const centroCustos = await centro_custos.findAll({
            where: { ativado: enabled }
         });

       return centroCustos;
    },

    findDepByPk: async (id) => {
        const deps = await centro_custos.findByPk(id);

        return deps;
    },

    createDep: async ({ params }) => {
        const deps = await centro_custos.create(params);

        return deps;
    },

    updateDep: async ({ centro, param }) => {
        const updated = await centro.update(param);
        return updated;
    },

    destroyDep: async () => {
        return "Método não implementado!";
    },
};