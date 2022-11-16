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
    trabajo_estado VARCHAR(50) NOT NULL
);
ALTER TABLE trabajo 
    ADD PRIMARY KEY  (trabajo_id);

CREATE TABLE trabajo_detalle (
    trabajo_detalle_id INT(11) NOT NULL,
    trabajoTrabajoId INT(11),
    usuarioUsuarioId INT(11) NOT NULL,
    CONSTRAINT fk_trabajo FOREIGN KEY (trabajoTrabajoId) REFERENCES trabajo(trabajo_id)
);
ALTER TABLE trabajo_detalle 
    ADD PRIMARY KEY  (trabajo_detalle_id);


CREATE TABLE categoria (
    categoria_id INT(11) NOT NULL,
    categoria_nombre VARCHAR(50),
    categoria_tipo VARCHAR(50),
    categoria_create DATETIME,
    categoria_update DATETIME
);
ALTER TABLE categoria
    ADD PRIMARY KEY (categoria_id);

CREATE TABLE categoria_detalle (
    categoria_detalle_id INT(11) NOT NULL,
    usuarioUsuarioId INT(11),
    categoriaCategoriaId INT(11),
    CONSTRAINT fk_categoria FOREIGN KEY (categoriaCategoriaId) REFERENCES categoria(categoria_id)
);
ALTER TABLE categoria_detalle
    ADD PRIMARY KEY (categoria_detalle_id);