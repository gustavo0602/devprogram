const express = require('express');  /*const importa*/

const app = express();

app.get('/',(request, response) => {

    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Gustavo'
    });
});

app.listen(3333); /*listando uma porta*/

