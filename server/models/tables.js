export const userTable = `
  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL,
    firstname varchar(255),
    lastname varchar(255),
    othernames varchar(255),
    username varchar(255),
    phonenumber varchar(15),
    password varchar(30),
    email varchar(30),
    registered varchar(30),
    isadmin boolean
  );
`;

export const recordTable = `
  CREATE TABLE IF NOT EXISTS Records (
    id SERIAL,
    createdOn date,
    createdby int,
    location varchar(20),
    status varchar(50),
    Images text[][],
    Videos text[][],
    comment varchar(2000)
  )
`;
