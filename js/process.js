document.addEventListener('DOMContentLoaded', function() {
    const usuarioB3 = JSON.parse(localStorage.getItem('usuarioB3'));

    if (!usuarioB3) {
        window.location.href = 'usuarioNaoCadastrado.html';
        return;
    }

    document.getElementById('nomeCompleto').innerText = usuarioB3.nomeCompleto;
    document.getElementById('usuario').innerText = `Usuário: ${usuarioB3.nomeCompleto.split(' ')[0]}`;
    document.getElementById('senha').innerText = `Senha: ${usuarioB3.nomeCompleto.split(' ')[0].charAt(0)}${usuarioB3.nomeCompleto.split(' ')[1].charAt(0)}`;

    let tipoAplicacao;
    switch (usuarioB3.idade) {
        case 1:
            tipoAplicacao = 'Renda Fixa';
            break;
        case 2:
            tipoAplicacao = 'Ações';
            break;
        case 3:
            tipoAplicacao = 'Fundo de Investimento Imobiliário';
            break;
        default:
            tipoAplicacao = 'Desconhecido';
    }
    document.getElementById('tipoAplicacao').innerText = `Tipo de aplicação sugerida: ${tipoAplicacao}`;
});