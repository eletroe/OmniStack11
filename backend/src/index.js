const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota e Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Excluir uma informação no back-end
  */




  /**
   * Tipos de Parâmentros
   * 
   * QUERY PARAMS: Parâmentros nomeados enviados na rota após "?" (Filtros, Paginação)
   * ROUTE PARAMS: Parâmentros usados para identificar recursos
   * REQUEST BODY: Corpo da requisição para Criar ou alterar recursos
   * 
   */

   /**
    * Bancos de Dados
    * 
    * SQL: MySQL, SQLite, SQL Server, PostgreSQL, Oracle, etc
    * NoSQL: MongoDB, CoucheDB, etc
    */

    /**
     * Comunicação dos bancos
     * 
     * Driver: SELECT * FROM users
     * Query Builder: table('users')
     */



app.listen(3333);
