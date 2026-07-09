const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/usuarios')
    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += `
        <table>
        ${criarThead()}
        ${crarTbody(dados)}
        <table>`
    })
    .catch((err)=>{
        
    })
})