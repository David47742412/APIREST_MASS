-- Active: 1668526487567@@127.0.0.1@3306@mass

/* CREACIÓN DE LAS TABLAS */
CREATE DATABASE MASS;

USE MASS;

DROP TABLE moneda;

CREATE TABLE usuario (
    
    usuario_id INT unsigned UNIQUE AUTO_INCREMENT,
    usuario_foto VARCHAR(50),
    usuario_dni char(8) UNIQUE,
    usuario_nombre VARCHAR(50),
    usuario_apellido VARCHAR(50),
    usuario_numero char(9),
    usuario_email VARCHAR(50) UNIQUE,
    usuario_password VARCHAR(50),
    usuario_create DATETIME,
    usuario_update DATETIME,
    usuario_latitud FLOAT,
    usuario_longitud FLOAT,
    usuario_token VARCHAR(500),
    PRIMARY KEY (usuario_id)

);

CREATE TABLE pais(
	
    pais_id INT UNSIGNED UNIQUE AUTO_INCREMENT,
    pais_nombre VARCHAR(50),
    pais_code VARCHAR(50),
    usuario_id INT UNSIGNED UNIQUE,
    PRIMARY KEY (pais_id)

);

CREATE TABLE moneda(

    moneda_id INT UNSIGNED UNIQUE AUTO_INCREMENT,
    moneda_nombre VARCHAR(50),
    moneda_valor FLOAT,
    pais_id INT UNSIGNED UNIQUE,
    PRIMARY KEY (moneda_id)

);

CREATE TABLE mensaje_detalle (

    mensaje_detalle_id INT UNSIGNED UNIQUE AUTO_INCREMENT,
    mensaje_id INT UNSIGNED UNIQUE,
    usuario_id INT UNSIGNED UNIQUE,
    PRIMARY KEY (mensaje_detalle_id)
);

CREATE TABLE mensaje (

    mensaje_id INT UNSIGNED UNIQUE AUTO_INCREMENT,
    mensaje_contenido VARCHAR(250),
    mensaje_create DATETIME,
    mensaje_update DATETIME,
    PRIMARY KEY (mensaje_id)

);

/* RELACIÓN DE LAS TABLAS */

/* usuario a pais conexión */
ALTER TABLE pais ADD CONSTRAINT fk_usuario_pais FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id);

/* pais a moneda conexión */
ALTER TABLE moneda ADD CONSTRAINT fk_pais_moneda FOREIGN KEY (pais_id) REFERENCES pais(pais_id);

/* usuario a mensaje_detalle conexión */
ALTER TABLE mensaje_detalle ADD CONSTRAINT fk_usuario_mensaje_detalle FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id);

/* mensaje a mensaje_detalle conexión */
ALTER TABLE mensaje_detalle ADD CONSTRAINT fk_mensaje_mensaje_detalle FOREIGN KEY (mensaje_id) REFERENCES mensaje(mensaje_id);

/* FIN DE LAS RELACIONES FK */

/* CREACIÓN DE LAS TABLAS */
CREATE TABLE trabajo (
    trabajo_id INT(11) NOT NULL,
    trabajo_nombre VARCHAR(50) NOT NULL,
    trabajo_tipo VARCHAR(50) NOT NULL,
    trabajo_fecha_encuentro VARCHAR(50) NOT NULL,
    trabajo_hora_encuentro VARCHAR(50) NOT NULL,
    trabajo_direccion VARCHAR(50) NOT NULL,
    trabajo_descripcion VARCHAR(50) NOT NULL,
    trabajo_precio INT(11) NOT NULL,
    trabajo_horario VARCHAR(50) NOT NULL,
    trabajo_estado VARCHAR(50) NOT NULL,
    PRIMARY KEY  (trabajo_id)
);

CREATE TABLE trabajo_detalle (
    trabajo_detalle_id INT(11) NOT NULL,
    trabajoTrabajoId INT(11),
    usuarioUsuarioId INT(11) NOT NULL,
    PRIMARY KEY  (trabajo_detalle_id),
);

CREATE TABLE categoria (
    categoria_id INT(11) NOT NULL,
    categoria_nombre VARCHAR(50),
    categoria_tipo VARCHAR(50),
    categoria_create DATETIME,
    categoria_update DATETIME,
    PRIMARY KEY (categoria_id)
);

CREATE TABLE categoria_detalle (
    categoria_detalle_id INT(11) NOT NULL,
    usuarioUsuarioId INT(11),
    categoriaCategoriaId INT(11),
    PRIMARY KEY (categoria_detalle_id)
);

/* RELACIÓN DE LAS TABLAS */

/* trabajo a trabajo_detalle conexión */
ALTER TABLE trabajo_detalle 
    ADD CONSTRAINT fk_trabajo FOREIGN KEY (trabajoTrabajoId) REFERENCES trabajo(trabajo_id);
/* categoria a categoria_detalle conexión */
ALTER TABLE categoria_detalle
    ADD CONSTRAINT fk_categoria FOREIGN KEY (categoriaCategoriaId) REFERENCES categoria(categoria_id);