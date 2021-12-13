module.exports = {
    departamentoGet: async (req, res) => {
        const { enabled } = req.params;

        try {
            const servicos = await service.findAllDeps(enabled);

            if (servicos.servicosCT.length < 1 && servicos.servicosCA.length < 1) {
                return res.json({ status: status.error, message: "Sem registros..." });
            }

            //Se a solicitação for de serviços habilitados (exibidos no formulário 
            // de pedido), então será retornado sem problemas o array para o usuário.
            if (enabled === "1") {
                return res.status(200).json(servicos);
            }
            // Agora se o usuário estiver solicitando os serviços desabilitados,
            // então será verificado se ele tem permissão para vizualizar isso
            // (ROLE ADMIN).
            else {
                // Enviando a array de serviços dentro da requisição
                req.array = servicos;

                // Executando middleware para verificar se o usuário é admin ou não
                // se ele for admin, no propŕio middleware será retornado o array,
                // se não, ele irá responder que é necessário o ROLE ADMIN.
                await authJwt.isAdmin(req, res);
            }
        }
        catch (err) {
            res.status(500).json({ status: status.error, message: err.message });
        };
    },

    departamentoGetByPk: async (req, res) => {

    },

    departamentoPost: async (req, res) => {

    },
}