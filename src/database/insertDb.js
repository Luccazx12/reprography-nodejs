const config = require("../config/");
//Biblioteca do sequelize 
const Sequelize = require("sequelize");
//Operadores do sequelize
const Op = Sequelize.Op;

const { initModels } = require("../app/models/init-models");
const { sequelize } = require("./index.js");
var models = initModels(sequelize);

const bcrypt = require("bcrypt");

exports.InserirRegistros = async () => {
    try {
        await models.avaliacao_pedido.bulkCreate([
            {
                id_avaliacao_pedido: 0,
                descricao: "Ainda não avaliado."
            },
            {
                id_avaliacao_pedido: 1,
                descricao: "Atendeu!"
            },
            {
                id_avaliacao_pedido: 2,
                descricao: "Não atendeu!"
            }
        ]);
        models.modo_envio.bulkCreate([
            {
                id_modo_envio: 1,
                descricao: "Digital",
            },
            {
                id_modo_envio: 2,
                descricao: "Físico",
            },
        ]);
        models.departamento.bulkCreate([
            {
                id_depto: 1,
                descricao: "Sem departamento",
            },
        ]);
        models.servicoCapaAcabamento.bulkCreate([
            {
                id_servico: 1,
                descricao: "Sem capa",
                quantidade: 999999999,
                valor_unitario: 0
            }
        ])
        await models.tipo_usuario.bulkCreate([
            {
                id: 1,
                descricao: "user",
            },
            {
                id: 2,
                descricao: "admin",
            },
        ]);
        console.log("\n(||| | | ----- Registros Inseridos com sucesso!!! ----- | | |||)");
    } catch {
        console.log({ error: "Registros já inseridos! (Validation error)" });
    };
};

exports.InserirUsuario = async () => {
    try {
        const password = await bcrypt.hash(
            config.authConfig.adminAccount.pass, config.authConfig.jwt.saltRounds
        );
        const user = await models.usuario.create({
            nif: 1,
            senha: password,
            nome: "ADMIN ACCOUNT",
            email: config.authConfig.adminAccount.email,
            depto: 1,
            cfp: 0,
            imagem: config.authConfig.adminAccount.defaultImage
            // ativado: 1, -> Valor já definido com defaultValue
            // primeiro_acesso: 1 -> Valor já definido com defaultValue
        });
        if (user) {
            const roles = await models.tipo_usuario.findAll({
                where: {
                    descricao: {
                        [Op.or]: ["admin"]
                    }
                }
            });
            if (roles) {
                const setRoles = await user.setRoles(roles);
                if (setRoles) {
                    console.log(`(| | | --- Usuário ADMIN criado com sucesso! --- | | |)`);
                };
            };
        };
    } catch {
        console.log({ error: "Usuário ADMIN já inserido! (Validation error)" });
    };
};
