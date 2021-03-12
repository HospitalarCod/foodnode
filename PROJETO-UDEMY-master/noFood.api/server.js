// inicialização do express necessario para começar 
const express = require('express');
// inicializando o bodyparser que foi instaldo em npm (meio que import)
const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.json()); //transformar em json
app.use(bodyParser.urlencoded({extended: false}));

let pessoas = []; // definindo uma var de pessoas 

// definindo uma resposta/requisição (READ)
app.get('/',(req, res) =>{ // requisição e resposta (obrigado colocar)
res.status(200).send('eae grupo td na paz'); // 200 = ok quando a leitura da ok
})

// definindo uma criação (CREATE)
app.post('/', (req, res) => {
    pessoas.push(req.body); // push faz com que seja criado 
    res.status(201).send(req.body); // 201 = criado quando se faz um post e cria algo
});

app.put('/:id', (req, res)=> { // deve colocar id para fazer UPDATE 
    let pessoaEncontrada = pessoas.filter(pes => { return pes.id == req.params.id}); // vai criar um filtro para verificar atraves do filtro puxando o id das pessoas 
    pessoaEncontrada = req.body; 
    res.status(202).send(pessoaEncontrada); //202 = aceito quando a mudança me aceita

})

app.delete('/:id', (req, res)=> {

    for (let index = 0; index < pessoas.length; index++) { // vai repitir todas as coisas relacionadas a pessoas
        const pessoa = pessoas[index];
        if (pessoa.id == req.params.id) { // se o id de 'pessoa' bater junto com o parametro 
            pessoas.splice(index, 1); // splice vai fazer deletar 
        }
    }

    res.status(204).send('registro crackudo'); // 204 = sem conteudo quando nao tem mais conteudo ele foi deletado

})

// 400 bad request e quando deu erro 
// 401 não autorizado 
// 500 erro interno do servidor

// iniciando servidor na porta 3000 que no caso é 'app' definido la em cima
app.listen(3000, () => {
    console.group('servidor on 3000');
})

