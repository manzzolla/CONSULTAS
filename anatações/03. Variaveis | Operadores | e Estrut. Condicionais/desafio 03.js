
/*
FAÇA UM ALGORITIMO QUE DADA AS 3 NOTAS TIRADAS PELO ALUNO EM UM SEMESTRE DA 
FACULDADE CALCULE E IMPRIME A SUA MÉDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO.


MÉDIA = (NOTA 1 + NOTA 2 + NOTA 3) / 3;

CLASSIFICAÇÃO: 
- MÉDIA MENOR QUE 5, REPROVAÇÃO
- MÉDIA ENTRE 5 E 7, RECUPERAÇÃO;
- MÉDIA ACIMA DE 7, PASSOU DE SEMESTRE
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovação')

} else if (media >= 5 && media <= 7){
console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}
