//um bloco em js é definido a partir de um par de chaves, com sentenças dentro dele, exemplo:
{
    console.log('inicio');
    console.log('fim');
}

//posso ter um bloco de códigos dentro do outro
{
    console.log('inicio');
    {
        {
            {
                console.log('fim');
            } // o bloco interno precisa ser fechado dentro do bloco que o envolve.
        }

    } 
}

//É possível gerar um bloco de códigos com sentenças vazias, apesar de não terem muito sentido, exemplo:
{
    ;
    ;
    ;
}
console.log('as setenças vazias não me pararam');

// um bloco com propósito, por exemplo é: somente executar as sentenças desse bloco, caso o aluno tire nota minima 8.

// um código é organizado no computador em PASTAS -> ARQUIVOS -> BLOCOS -> SENTENÇAS