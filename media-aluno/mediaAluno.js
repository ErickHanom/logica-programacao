function mediaAluno() {

    // Lógica de Programação
    // Problema: receber 3 notas de um aluno, 
    // calcular e apresentar a média e o resultado
    // se o aluno foi aprovado, reprovado ou ficou de exame.

    console.log ('Inicio do programa');

    // declaração das "variáveis"
    const nota1 = parseInt (document.getElementById ('nota1').value);
    const nota2 = parseInt (document.getElementById ('nota2').value);
    const nota3 = parseInt (document.getElementById ('nota3').value);
    
    // calculo da media
    const media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('resultado').innerHTML = 'a media do aluno é:' + media +
    '<br>';


    if (media >= 7) {
        document.getElementById('resultado').innerHTML += 'APROVADO';
    } else if (media >=5) {
        document.getElementById('resultado').innerHTML += 'EXAME';
    }else {
        document.getElementById('resultado').innerHTML += 'REPROVADO';
    }

    console.log ('Fim do programa');
}

mediaAluno()