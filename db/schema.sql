create table users (
    user_id varchar(30) primary key not null,
    name varchar(30) not null,
    email varchar(30) not null,
    password varchar(255) not null,
    college varchar(30) not null);

create table income (
    income_id int primary key auto_increment,
    user_id varchar(30) not null,
    name varchar (30) not null,
    category varchar(30) not null,
    amount int not null,
    date date not null
);

create table expenses (
    expense_id int primary key auto_increment,
    user_id varchar(30) not null,
    name varchar (30) not null,
    category varchar(30) not null,
    amount int not null,
    date date not null,
    note varchar(255)
);

create table budgets(
    budget_id int primary key auto_increment,
    user_id varchar(30) not null,
    category varchar(30) not null,
    monthly_budget int
);

create table goals(
    goal_id int primary key auto_increment,
    user_id varchar(30) not null,
    name varchar(30) not null,
    target_amount int not null,
    current_amount int not null,
    deadline date
)
