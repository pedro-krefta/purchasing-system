const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const produtoController = require('./controller/produto.controller')
const usuarioController = require('./controller/usuario.controller')
const compraController = require('./controller/compra.controller')
const relatVwController = require('./controller/relatVW.controller')

const hostname = 'localhost'
const PORT = 3000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.post('/usuario/carga-lote', usuarioController.cargaLote)
app.get('/usuarios', usuarioController.listar)
app.get('/usuario/buscar/:nome', usuarioController.buscarPorNome)
app.get('/usuario/:id', usuarioController.buscarPorCod)
app.delete('/usuario/:id', usuarioController.apagar)
app.put('/usuario/:id', usuarioController.atualizar)


app.post('/produto/carga-lote', produtoController.cargaLote) 
app.get('/produtos', produtoController.listar)
app.get('/produto/:id', produtoController.buscarPorCod)
app.get('/produto/buscar/:nome', produtoController.buscarPorNome)
app.delete('/produto/:id', produtoController.excluir)
app.put('/produto/:id', produtoController.atualizar)


app.post('/compra', compraController.cadastrar)
app.post('/compras', compraController.listar)


app.get('/relatorio/produtos-criticos', relatVwController.listarHistoricoSaidas)
app.get('/relatorio/volume-compras', relatVwController.listarPorCategorias)


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Aplicação rodando!!!' })
})


conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro de conexão com o banco de dados!', err)
    })

    