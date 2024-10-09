import { getCSS, tickConfig} from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/https://github.com/tavinho2/hist-ria'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x:nomeDasRedes,
            y:quantidadedeUsuarios,
            type:'bar',
            marker: {
                 color:getCSS('--primary-color')
            }
        }
    ]
  
    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuarios'
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text:'Nome das redes sociais'
                font: {

                }
            }
        },
        yaxis: {
            tickConfig,
            title: {
                text: 'Bilhoes de usuarios ativos'
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document. getElementById('graficos-container').appendChild(grafico)
    Ploty.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()