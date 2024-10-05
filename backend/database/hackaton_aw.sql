drop table if exists users;
drop table if exists ticket;
drop table if exists type_ticket;
drop table if exists ticket_type_ticket;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
	rut varchar(20) not null unique,
	email varchar(100) not null unique,
	password varchar(12) not null
);

create table ticket(
	ID serial primary key,
	name_event varchar(100) not null,
	date_event TIMESTAMP not null,
	site_event varchar(50) not null,
	ID_user int,
	foreign key (ID_user) references users(ID) on delete cascade on update cascade
);

create table type_ticket(
	ID serial primary key,
	type varchar(20) not null
);

create table ticket_type_ticket(
	ID serial primary key,
	ID_ticket int,
	ID_type_ticket int,
	foreign key (ID_ticket) references ticket(ID) on delete cascade on update cascade,
	foreign key (ID_type_ticket) references type_ticket(ID) on delete cascade on update cascade
);


select * from users;
select * from ticket;
select * from type_ticket;
select * from ticket_type_ticket;
