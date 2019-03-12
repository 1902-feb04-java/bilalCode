--Set Operatiosn
--in SQL we have some ways to combine two result sets
--operators UNION, UNION ALL, INTERSECT, INTERSECT ALL, EXCEPT,
--UNION involves concatenating two result sets into one (the number of columns and their types have to be the same)

--all first names of customers and employess
SELECT employees.first_name FROM employees
UNION
Select customers.first_name FROM customers;
--for every set operator, there is an "ALL" version. the default version (technically  the DISTINCT version) removes all duplicates

--all first names that are had by  both a customer and an employee
SELECT employees.first_name FROM employees
INTERSECT
Select customers.first_name FROM customers;

--the two above are symmetric operators, order does not matter

--all customer first name that no employee has
SELECT employees.first_name FROM employees
EXCEPT -- aka "set difference", essentially subtraction
Select customers.first_name FROM customers;

--subquery
--there is anohter  way to combine the data from multi. tables

--every trakc that has never been purchacsed
SELECT tracks
FROM tracks AS t
WHERE t.id NOT IN (SELECT id FROM purchased_tracks)

--for subqueries, we have operator: IN, NOT IN, EXISTS, NOT EXISTS, ALL, SOME (or ANY)