var dc = 'Sou da DC. ';
var marvel = 'Sou da Marvel. ';
var mito = 'Sou da mitologia. ';
var x = [0];
var pontos = [6];

const charB = {
        names: ["SUPERMAN", "SUPER MAN", "SUPER HOMEM"],
        chartips: [dc, " Não sou da terra. ", " Meu principal uniforme é azul. ", " Meu nome também é Kalel. "],
    }
    
const charC = {
        names: ["SHAZAM", "CHAZAM", "XAZAM"],
        chartips: [dc, " Sou uma criança ", " Me transformo em adulto. ", " Meu uniforme leva tem um raio amarelo no peito."],
    }

const charD = {
        names: ["MULHER MARAVILHA", "WONDER WOMAN", "MULHERMARAVILHA"],
        chartips: [dc, " Nasci em uma ilha isolada. ", " Uma das minhas armas é um chicote. ", " Sou uma amazona. "],
}

const charE = {
    names: ["FLASH", "FLESH", "THE FLASH"],
    chartips: [dc, " Meu uniforme é vermelho. ", " Meu nome verdadeiro é Barry Allen. ", " Sou muito veloz. "],
}

const charF = {
    names: ["LEX LUTHOR", "LEX LUTOR", "LAX LUTOR"],
    chartips: [dc, " Sou careca. ", " Por vezes uso uma armadura robótica. ", " Sou o principal inimigo do Super Homem. "],
}

const charG = {
    names: ["CORINGA", "JOKER", "CURINGA"],
    chartips: [dc, " HA HA HA HA! ", " Gosto de fazer as pessoas sorrirem. ", " O Batman não vai com a minha cara. "],
}

const charH = {
    names: ["AQUAMAN", "AQUA MAN", "AQUAMEN"],
    chartips: [dc, " GLUB. ", " Meu reino é escondido. ", " Falo com os animais aquáticos. "],
}

const charI = {
    names: ["HULK", "THE HULK", "O HULK"],
    chartips: [marvel, " ESMAGA! ", " Sou um dos personagens mais fortes. ", " Sou verde. "],
}

const charJ = {
    names: ["CAPITÃO AMÉRICA", "CAPITAO AMERICA", "CAPITÃO AMERICA"],
    chartips: [marvel, " Lutei na Segunda Guerra Mundial. ", " Fui congelado por muito tempo. ", " Uso um escudo. "],
}

const charK = {
    names: ["HOMEM-ARANHA", "SPIDERMAN", "HOMEM ARANHA"],
    chartips: [marvel, " Meu tio não está Ben. ", " Sou meio nerd. ", " Escalo paredes. "],
}

const charL = {
    names: ["IRON MAN", "HOMEM DE FERRO", "IRONMAN"],
    chartips: [marvel, " Sou muito rico. ", " Meus projetos ganham o nome de 'Mark'. ", " Sou de ferro. "],
}

const charM = {
    names: ["VIÚVA NEGRA", "VIUVA NEGRA", "VIÚVA NEGRA"],
    chartips: [marvel, " Fui treinada na Rússia. ", " Bart é meu amigo. ", " Tenho o nome de uma aranha. "],
}

const charN = {
    names: ["GAVIÃO ARQUEIRO", "GAVIAO ARQUEIRO", "HAWKEYE"],
    chartips: [marvel, " Também me tornei um ronin. ", " Muitos me acham inútil. ", " Uso arco e flecha. "],
}

const charO = {
    names: ["THANOS", "TANOS", "TANUS"],
    chartips: [marvel, " Reuni as joias do infinito ", " Dizimei metade da população do universo. ", " Você deveria ter acertado a cabeça. "],
}

const charP = {
    names: ["THOR", "TOR", "TÓR"],
    chartips: [marvel, " Não sou da terra. ", " Ele é um amigo! Do trabalho! ", " Meu irmão é meio problemático. "],
}

const charQ = {
    names: ["LOKI", "LÓKI", "LOQUI"],
    chartips: [marvel, " Um ser superior como eu não deveria ficar dando dicas. ", " Minha verdadeira família é azul. ", " Sou o mestre das ilusões. "],
}

const charR = {
    names: ["ULTRON", "ULTROM", "ÚLTRON"],
    chartips: [marvel, " EU NÃO SOU O PINOCCHIO! ", " Meu pai é o Tony Stark. ", " Sou feito de um metal muito resistente. "],
}

const charS = {
    names: ["DOUTOR ESTRANHO", "DR ESTRANHO", "DR. ESTRANHO"],
    chartips: [marvel, " A magia me guia. ", " Sempre abro portais. ", " Ando sempre com o Manto da Levitação. "],
}

const charT = {
    names: ["VENOM", "VENON", "VENNOM"],
    chartips: [marvel, " Nós somos um! ", " Fazemos simbiose. ", " Odeio o homem-aranha. "],
}

const charU = {
    names: ["PANTERA NEGRA", "BLACK PANTHER", "O PANTERA NEGRA"],
    chartips: [marvel, " Sou o mais rico de meu universo. ", " Meu país é oculto. ", " Meu poder é ancestral. "],
}

const charV = {
    names: ["HÉRCULES", "HERCULES", "HERCULIS"],
    chartips: [mito, " Cumpri 12 trabalhos. ", " Matei minha própria família. ", " Tenho a força de 300 homens. "],
}

const charW = {
    names: ["AQUILES", "AQUILIS", "AQUILES"],
    chartips: [mito, " Sou o mais belo dos heróis. ", " Sou quase invencível. ", " Minha fraqueza é meu calcanhar. "],
}

const charX = {
    names: ["TESEU", "TESEO", "THESEU"],
    chartips: [mito, " Enfrentei um minotauro. ", " Tornei-me rei. ", " Sou tão forte quanto Hércules. "],
}

const charY = {
    names: ["PERSEU", "PERSEL", "PERSEO"],
    chartips: [mito, " Derrotei uma poderosa górgona. ", " Já usei meu escudo para não virar pedra. ", " Sou filho de Zeus. "],
}

const charZ = {
    names: ["ORFEU", "ORFEL", "ORFEO"],
    chartips: [mito, " Também sou músico. ", " Sou um Argonauta. ", " Já fui ao submundo para resgatar a minha eposa. "],
}

function getRandomNumber(min, max){

    let step1 = max - min;
    let step2 = Math.random()*step1;
    let result = Math.floor(step2) + min;
    
        return result
    }
    
let group = [charB, charC, charC, charD, charE, charF, charG, charH, charI, charJ, charK, charL, charM, charN, charO, charP, charQ, charR, charS, charT, charU, charV, charW, charX, charY, charZ]
let sortedChar = getRandomNumber(0, group.length)
let thissortedChar = group[sortedChar]

function compute(){

    var principal = document.getElementById("principal").value;
    var principalC = principal.toUpperCase()

    if (thissortedChar.names.includes(principalC)) {
        pontos -= 0
        document.getElementById("result").innerHTML = "Seu palpite é: " + principal + ". Você acertou! Seus pontos:" + pontos
    } else if (principal == "tip") {
        pontos -= 1
        document.getElementById("result").innerHTML = "Sua dica: " + thissortedChar.chartips[x] + " Seus pontos: " + pontos
        x++
    } else {
        pontos -= 2
        document.getElementById("result").innerHTML = "Errou! Seus pontos: " + pontos
    }
    
    if (pontos <= 0) {        
        document.getElementById("result").innerHTML = "Você perdeu! Seus pontos: " + pontos
    }
    return [pontos, x]
}