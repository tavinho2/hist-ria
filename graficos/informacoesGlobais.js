const url = 'https://'dev/github/tavinho2/hist-ria?vscode-lang=pt-br

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados. total_pessoas_conectadas / 1e9)
    const pessoasNoMundo =(dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)*100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo)*100).toFixed
}