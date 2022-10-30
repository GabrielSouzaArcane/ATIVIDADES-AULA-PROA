create database POKOMOM;
-- to criando um banco de dados

use POKOMOM;
-- estou utilizando o banco de dados 

create table Ginasio (
	nome_do_Ginasio varchar(30) unique not null primary key,
	tipo_do_Ginasio varchar(20),
	nome_do_Competidor varchar(20),
	nome_da_insignia varchar(20),
	pokomom_principal varchar(20)
); 
-- criei uma tabela, dentro da tabela são 5 atributos 

Describe Ginasio;
-- descrever, fazer com que minha tabela seja imprimido  

insert into Ginasio /*()*/ values ("fire","fogo", "Ashell", "foguinho", "pikachu");
-- adicionar dados a minha tabela e    

select*from Ginasio
-- mostra os dados que estão inseridos na tabela "Ginasio"