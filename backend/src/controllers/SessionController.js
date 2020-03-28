const connection = require('../database/connection');

module.exports  = {
    async create(request, response) {
        const { pass } = request.body;

        const ong = await connection('ongs')
            .where('pass', pass)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'Nenhuma ONG encontrada com este ID!'});
        }

        return response.json(ong);
    }
};