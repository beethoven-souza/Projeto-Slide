var balls = document.querySelector('.balls') //variavel para recuperar as bolinhas de rolagem
var quantidade = document.querySelectorAll('.slides .imagens')// variavel para recuperar as imagens
var atual = 0 // variavel para definir a posicao atual da imagem
var imagem = document.getElementById('atual') // variavel para recuperar a imagem atual
var next = document.getElementById('next') // variavel para recuperar o botao next
var voltar = document.getElementById('voltar') // variavel para recuperar o botao voltar 
var rolar = true // validar a rolagem das bolinhas

// criacao das bolinhas de rolagem de acordo com a quantidade de imagens
for (let i = 0; i < quantidade.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual') // adicional a class imgAtual ao Id 0

var pos = document.querySelectorAll('.balls div') // recuperando todas as divs dentro da class ball

// adiciona a cada div da class balls um evento click, para que a variavel atual receba a posicao da div
for(let i=0; i < pos.length; i++){ 
    pos[i].addEventListener('click',()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
}

// adicionar o evento click ao botar de voltar, a variavel atual reduz um valor
voltar.addEventListener('click',()=>{
    atual--
    rolar = false
    slide()
})

// adicionar o evento click ao botao next, a variavel atual reduz um valor
next.addEventListener('click',()=>{
    atual++
    rolar = false
    slide()
})

// funcao que determina a dinamica do inicio do slide  e quando o slide chega ao final
function slide(){
    if(atual >= quantidade.length){
        atual = 0
    }
    else if (atual < 0) {
        atual = quantidade.length-1
    }


    document.querySelector('.imgAtual').classList.remove('imgAtual')
    // aumenta a div que contem os isllides de imagens
    imagem.style.marginLeft = -680*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}

// intervalo de transicao das imagens
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
}, 4000)


