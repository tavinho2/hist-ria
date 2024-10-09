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
    
}