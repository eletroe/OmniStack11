const crypto = require('crypto');
const connection = require('../database/connection');

module.exports  = {
    /**
     * Método de consulta tabela ongs
     */
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },
    
    /**
     * Método de INSERT na tabela ongs
     */
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const pass = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            pass,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
   
    return response.json({ pass });

    }
};