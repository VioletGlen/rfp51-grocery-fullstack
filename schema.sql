DROP DATABASE IF EXISTS grocery;

CREATE DATABASE grocery;

USE grocery;

CREATE TABLE groceryList (
  id INT PRIMARY KEY AUTO_INCREMENT,
  itemName VARCHAR(50) NOT NULL,
  quantity INT NOT NULL
);

-- /*  Execute this file from the command line by typing:
--  *    sqlite3 items.db < schema.sql
--  *  to create the database and the tables.*/

-- Parker Stafford: "Just to clarify for anyone who did not join the junior zoom room earlier. Please use mysql for your database. If you get errors when running npm install please remove sqlite3 from you dependencies in package.json!"

-- /*  Execute this file from the command line by typing:
--  *    mysql -u student -p < schema.sql
--  *  to create the database and the tables.*/
