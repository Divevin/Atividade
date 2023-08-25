const a = document.getElementById('p'); //aqui estou criando uma variavel "a" que está acessanndo o conteudo da div de id "p"
a.innerText = 'palmeiras nao tem mundial!'; //através da variavel "a" que possui acesso ao conteudo da div "p" estou alterando o seu conteudo

const b = document.getElementById('t');
b.innerHTML = '<p> isto </p> e outro exemplo'; //Neste exemplo se torna possível alterar não só o texto mas também toda a forma com a qual o conteudo e visualisado

const c = document.getElementById('s');
c.textContent = 'Novo tudo'; //Neste exemplo ele é focado apenas no conteudo bruto, não sendo possivel alterar o html nem o css, ao utilizalo ele ignora todos os complementos
                            //da div e altera tudo para o texto bruto 













//p.innerText = 'Novo texto'; com este comando fica possível alterar o conteudo de texto visual de um elemento sem ter que avaliar os seus outros aspectos de css e html
 
//p.innerHTML = 'Novo conteudo html'; Utilizando este comando é possível alterar a configuração do html, um exemplo pelo que entendi seria que se no html você tivesse criado
                //um quadrado azul, com este comando poderia alteralo e construir um triangulo vermelho utilizando dentro de ' ' os comandos como se fosse criar no html

//p.textContent = ''; este comando serve para alterar um conteudo de forma bruta ignorando todas as configurações, por exemplo se tiver uma Div com um texto azul
                    //em italico, tamanho 12, quando utilizar este comando o conteudo inserido nele ira de forma "seca" ignorando configs de css e html se tiver
