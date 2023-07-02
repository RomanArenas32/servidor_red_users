const express = require('express');
const { dbConnecion } = require('../database/config');


class Server {
    constructor() {
        this.PORT = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/users';

        this.dbConnecion();

        this.midlewares();
        this.routes();
    }
    async dbConnecion() {
        await dbConnecion();
    }
    midlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('Servidor corriendo en el puerto: ', this.PORT);
        })
    }

}

module.exports = Server;