const inputName = document.getElementById('inputName');
const inputLastName = document.getElementById('inputLastName');
const ageSelect = document.getElementById('ageSelect');

const logoImage = document.getElementById('logoImage');

const btnSubmit = document.getElementById('btnSubmit');
const btnClear = document.getElementById('btnClear');
const alertText = document.getElementById('alertText');

const paragraphText = "* Favor preencher todos os campos acima"

alertText.innerHTML = paragraphText

logoImage.src = 'img/b3.png';

btnSubmit.addEventListener('click', function() {
    if (inputName.value === '' || inputLastName.value === '') {
        alertText.style.color = 'red';
        alertText.innerHTML = 'Nome e sobrenome devem ser informados';
        logoImage.src = 'img/erro.png';

        inputName.addEventListener('click', function() {    
            alertText.innerHTML = paragraphText
        });

        inputLastName.addEventListener('click', function() {    
            alertText.innerHTML = paragraphText
        });
    } 

    if (inputName.value !== '' && inputLastName.value !== '') {
        if (ageSelect.value === 'Selecione') {
            alertText.style.color = 'red';
            alertText.innerHTML = 'Selecione uma faixa etaria';
            logoImage.src = 'img/erro.png';
        } 
        else if (ageSelect.value === 'Entre 0 a 12 anos' || ageSelect.value === 'Entre 13 a 18 anos') {
            alertText.style.color = 'red';
            alertText.innerHTML = `${inputName.value} ${inputLastName.value}, você nao tem idade suficente`
        }
        else {
            alertText.style.color = 'blue';
            alertText.innerHTML = 'Processando aguarde 5 segundos'
            logoImage.src = 'img/processando.gif';

            const usuarioB3 = {
                nomeCompleto: `${inputName.value.toUpperCase()} ${inputLastName.value.toUpperCase()}`,
                idade: (() => {
                    switch (ageSelect.value) {
                        case 'Entre 19 a 21 anos':
                            return 1;
                        case 'Entre 22 a 30 anos':
                            return 2;
                        case '31 anos ou mais':
                            return 3;
                        default:
                            return 0;
                    }
                })()
            };

            localStorage.setItem('usuarioB3', JSON.stringify(usuarioB3));


            setTimeout(function() {
                window.location.href = 'processa.html';
            }, 5000);    
        }
    }
});

btnClear.addEventListener('click', function() {
    inputName.value = '';
    inputLastName.value = '';
    ageSelect.value = 'Selecione';
    alertText.style.color = 'darkblue';
    alertText.innerHTML = paragraphText
    logoImage.src = 'img/b3.png';
});
