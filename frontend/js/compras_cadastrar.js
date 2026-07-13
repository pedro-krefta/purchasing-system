const resposta = document.getElementById('resposta')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const idUsuario = document.getElementById('idUsuario').value
    const idProduto = document.getElementById('idProduto').value
    const tipoMovimento = document.getElementById('tipoMovimento').value
    const quantidadeMovimentada = document.getElementById('quantidadeMovimentada').value
    const precoUnitario = document.getElementById('precoUnitario').value
    const statusCompra = document.getElementById('statusCompra').value
    const formaPagamento = document.getElementById('formaPagamento').value
    const dataCompra = document.getElementById('dataCompra').value

    const movimento = { 
        idUsuario: parseInt(idUsuario),
        idProduto: parseInt(idProduto),
        tipoMovimento: tipoMovimento,
        quantidadeMovimentada: quantidadeMovimentada,
        precoUnitario: precoUnitario,
        formaPagamento: formaPagamento,
        statusCompra: statusCompra,
        dataCompra: dataCompra,
    }

    fetch('http://localhost:3000/compra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movimento)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        
        if (dados.message) {
            resposta.innerHTML = `<p>${dados.message}</p>`
        } else {
            resposta.innerHTML = `<p>Movimentação de código ${dados.codCompra} registrada com sucesso!</p>`
            document.querySelector('form').reset()
        }
    })
    .catch((err) => {
        console.error('Erro ao registrar o movimento', err)
        resposta.innerHTML = '<p>Erro ao tentar registrar a movimentação.</p>'
    })
})
