const formCypress = document.getElementById('form-cypress');
const resultados = document.getElementById('resultados');
const pessoa = document.getElementById('pessoa');
const dataNascimento = document.getElementById('data-nascimento');
const funcao = document.getElementById('funcao')
const botao = document.getElementById('botao-continuar');
const acesso = new Date();

function clickButton () {
    botao.setAttribute('disabled', 'disabled');
    botao.innerText = 'Processando...';

    const momento = new Date();
    const tempo = momento - acesso;

    const tsAniversario = Date.parse(dataNascimento.value.trim() + ' 00:00:00');
    const dataAniversario = new Date(tsAniversario);

    formCypress.classList.add('fadeout');
    setTimeout(function () {
        formCypress.style = 'display: none';
        formCypress.removeAttribute('class');

        setTimeout(function () {
            if (tempo <= 1500 && 
                pessoa.value.trim() === 'Aléxia' && 
                dataAniversario.getMonth() === momento.getMonth() &&
                dataAniversario.getDate() === momento.getDate()
            ) {
                resultados.innerHTML = '<center>Carregando...</center>';

                setTimeout(function () {
                    let currentUrl = window.location.href;
                    if (currentUrl.substr(-1) === '/') {
                        currentUrl = currentUrl.substr(0, currentUrl.length -1);
                    }
                    window.location.href = currentUrl + '/parabens/';
                }, 2000);
            }
            else {
                populateData();
            }

            resultados.className = 'fadein';
        }, 200)

    }, 450);
}

function checkAndEnableButton (evt) {
    if (pessoa.value.trim() !== '' && 
        dataNascimento.value.trim() !== '' && 
        funcao.value.trim() !== ''
    ) {
        botao.removeAttribute('disabled');
        botao.setAttribute('onClick', 'clickButton()');
    }
}

function populateData () {
    const nome = pessoa.value.trim();
    const data = dataNascimento.value.trim();
    const atuacao = funcao.value.trim();

    const timestamp = Date.parse(data + ' 00:00:00');
    const objData = new Date(timestamp);
    const dataFormatada = objData.getDate().toString().padStart(2, '0') + '/'
        + (objData.getMonth() + 1).toString().padStart(2, '0') + '/'
        + objData.getFullYear();

    const idade = new Date(new Date() - objData).getFullYear() - 1970;

    document.getElementById('nome').innerText = nome;
    document.getElementById('data').innerText = dataFormatada
    document.getElementById('idade').innerText = idade;
    document.getElementById('atuacao').innerText = atuacao;
}

pessoa.addEventListener('change', checkAndEnableButton);
dataNascimento.addEventListener('input', checkAndEnableButton);
funcao.addEventListener('input', checkAndEnableButton);
document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 'enter') {
        e.preventDefault();
        botao.click();
    }
});

const hoje = acesso.getFullYear() 
    + '-' + acesso.getMonth().toString().padStart(2, '0') 
    + '-' + acesso.getDate().toString().padStart(2, '0');
dataNascimento.setAttribute('max', hoje);