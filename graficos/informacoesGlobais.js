const url = 'https://'/github/tavinho2/hist-ria?vscode-

    async () => {
        const res = await fetch(url)
        const dados = await res.json()
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container_texto')
        paragrafo.innerHTML = 'Voce sabia que o mundo tem <span>${pessoasNoMundo}'

        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
    }

vizualizarInformacoesGlobais()