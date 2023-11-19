create database nordicosw;
use  nordicosw;
CREATE TABLE usuario (
  idusuario INT auto_increment,
  nome VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  fkmovimentos INT,
  PRIMARY KEY (idusuario, fkmovimentos),
  CONSTRAINT fkmovimentos
    FOREIGN KEY (fkmovimentos)
    REFERENCES movimentos (idmovimentos));
    
    CREATE TABLE movimentos (
  idmovimentos INT primary key auto_increment,
  nome VARCHAR(45) NULL,
  nivel INT NULL)
  auto_increment= 100;
  
  select*from movimentos;
  
  insert into movimentos value
  (null, "swing",1),
  (null, "swing180",1),
  (null, "swing360",2),
  (null, "swing540",3),
  (null, "dragon360",2),
  (null, "geinger",3),
  (null, "shrimp flip",3),
  (null, "olimpico",2),
  (null, "suicide",1);
  
  CREATE TABLE requisitos (
  fkexecucao INT ,
  fkmovimento INT ,
  nome VARCHAR(45) NULL,
  repetições INT NULL,
  PRIMARY KEY (fkexecucao, fkmovimento),
  CONSTRAINT fkligação
    FOREIGN KEY (fkexecucao)
    REFERENCES execucao (idexecucao),
  CONSTRAINT fkrequisitos
    FOREIGN KEY (fkmovimento)
    REFERENCES movimentos (idmovimentos));
 
 CREATE TABLE execucao (
  idexecucao INT primary key auto_increment,
  nome VARCHAR(45) NULL,
  passo1 VARCHAR(45) NULL,
  passo2 VARCHAR(45) NULL,
  passo3 VARCHAR(45) NULL,
  passo4 VARCHAR(45) NULL) auto_increment=200;
  
  