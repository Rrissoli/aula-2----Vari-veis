const idade = 20;

console.log(idade);

{

} //isso cria um escopo local , ou seja, fora da chaves fica em escopo global , ja que dentro da chaves esta em local 
//variaveis criadas dentro do escopo não da pra se usar fora , e o que esta fora da pra usar dentro do escopo 
// exemplo
{
    const idade = 20; {
        console.log(idade);
    }
}
//IRA FUNCIONAR 
// EXEMPLO 2 
{
    let nome = "ralph"; {
        console.log(nome)
    }
    nome = "ralph2";

}
//NÃO IRA FUNCIONAR , IRA IMPRIMIR RALPH