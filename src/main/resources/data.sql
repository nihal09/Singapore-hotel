DROP TABLE IF EXISTS hotel;
CREATE TABLE hotel AS SELECT * FROM CSVREAD('D:\nihal\Singapore hotel\file.csv');


