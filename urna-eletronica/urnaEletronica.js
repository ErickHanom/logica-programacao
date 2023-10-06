const opcao = 1;

// Situação de opção com o switch-case

switch (opcao) {
    case 1:
        console.log('Opção é 1');
        break;
    case 2:
        console.log('Opção é 2');
        break;
    default:
        console.log('Nenhuma das opções');
        break;
    
}

// Situação de opção com o 'if' e o 'else'

if (opcao === 1) {
    console.log('Opção é 1');
}else if (opcao === 2) {
    console.log('Opção é 2');
}else {
    console.log('Nenhuma das opções');
}