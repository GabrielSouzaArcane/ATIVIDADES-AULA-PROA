create database POKOMOM;

use POKOMOM;

create table POKEDEX (
		Nome_do_pokemon varchar(30) unique not null primary key,
        Categoria varchar(30),
        Tipo varchar(30),
        Evolução  varchar(30)
);

describe POKEDEX;

insert into POKEDEX values ("Pikachu","Rato", "Elétrico", "Raichu");

insert into POKEDEX values ("Charmander","Largato", "Fogo", "Charmeleon");

insert into POKEDEX values ("Bulbasaur","Semente", "Grama, Veneno", "Ivysaur");

insert into POKEDEX values ("Squirtle","Tartaruga Minúscula", "Água", "Wartortle");

insert into POKEDEX values ("Pidgey","Pássaro Minúsculo", "Voador", "Pidgeotto");

insert into POKEDEX values ("Jigglypuff","Balão", "Normal, Fada", "Wigglytuff");

insert into POKEDEX values ("Ponyta","Cavalo de Fogo", "Fogo", "Rapidash");

insert into POKEDEX values ("Mew","Novas Espécies", "Psíquico", "no evolution");

insert into POKEDEX values ("Cyndaquil","Rato de fogo", "Fogo", "Quilava");

insert into POKEDEX values ("Cyndaquil","Rato de fogo", "Fogo", "Quilava");

insert into POKEDEX values ("Marill","Rato-aqua", "Água, Fada", "Quilava");

insert into POKEDEX values ("Metapod","Casulo", "Inseto", "Butterfree");

select*from POKEDEX;

create table Pokemon (
	Nome_do_pokemon varchar(30) unique not null,
    Numero_do_pokemon int primary key auto_increment,
	altura_do_pokemon varchar(10),
    peso_do_pokemon varchar(10),
    fraqueza_do_pokemon varchar(10)
    );
    
    
describe Pokemon;

select*from Pokemon;

alter table Pokemon add constraint FK_NomePokemon foreign key (Nome_do_pokemon) references POKEDEX(Nome_do_pokemon);

insert into Pokemon values ("Pikachu","01", "0.4 M", "6.0 KG", "Chão");

insert into Pokemon values ("Charmander","02", "0.6 M", "8.5 KG", "Água");

insert into Pokemon values ("Bulbasaur","03", "0.7 M", "6.9 KG", "Fogo");

insert into Pokemon values ("Squirtle","04", "0.5 M", "9.0 KG", "Elétrico");

insert into Pokemon values ("Pidgey","05", "0.3 M", "1.8 KG", "Elétrico");

insert into Pokemon values ("Jigglypuff","06","0.5 M", "5.5 KG", "Veneno");

insert into Pokemon values ("Ponyta","07", "1,0 M","30 KG", "Água");

insert into Pokemon values ("Mew","08", "0.4 M", "4.0 KG", "Escuro");

insert into Pokemon values ("Cyndaquil","09", "0.5M", "7.9 KG", "Água");

insert into Pokemon values ("Marill","10", "0.4 M", "8.5 KG", "Fogo");

insert into Pokemon values ("Metapod","11", "0.7 M","9.9 KG", "Fogo");
