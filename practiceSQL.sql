--comments in SQL with (--)

--SELECT statements

SELECT * FROM films;

SELECT title FROM films;


-- column aliasing
SELECT title AS "Title", release_year AS "Year Released" FROM films;

--all films with rental duration more than 3
SELECT * FROM films 
WHERE rental_duration > 3;

SELECT * FROM films 
where title < 'D';

SELECT * FROM films 
where title < 'B' 
AND rental_duration = 3;


--SELECT statement: for making queries to the database (read access, not modifying) made up of several "clauses"
--6 main clauses
--1) SELECT clause (chooses which columns will be returned)
--2) FROM clause (chooses which table to access)
--3) WHERE clause (filters rows based on conditions)

--we have the ability to "aggregate" rows together
--using the "GROUP BY" clause, together with aggregate functions.
--aggregate functions: SUM, COUNT, AVG, MIN, MAX

SELECT state, COUNT (*)
FROM customers
GROUP BY state

--when we use GROUP BY, we can only select columns that either /part/ of the GROUP BY, or are aggregated

--HAVING
SELECT state, COUNT (*)
FROM customers
WHERE state IS NOT NULL --Where filters before the grouping
GROUP BY state
HAVING COUNT(*) >=2; --Having filters after the grouping

--ORDER BY
SELECT state, COUNT (*)
FROM customers
WHERE state IS NOT NULL 
GROUP BY state
HAVING COUNT(*) >=2; 
ORDER BY state;
--you can order by columns you are not selecting h


--the logical order of execution of the clause of SELECT;
--1) FROM
--2) WHERE
--3) GROUP BY
--4) HAVING
--5) ORDER BY
--6) SELECT

--1. list all customers (full names, customer ID, and country) who are not in the US.
SELECT *
FROM customers
WHERE NOT country = 'USA';
-- not equal can <>

--2. list all customers from brazil.
SELECT *
FROM customers
WHERE country = 'Brazil';

--3. list all sales agents
SELECT *
FROM employees
WHERE title = 'Sales Support Agent';

--4. show a list of all countries in billing addresses on invoices.
SELECT billing_country --or SELECT DISTINCT
FROM invoices
GROUP BY billing_country;

SELECT *
FROM invoices;

--5. how many invoices were there in 2009, and what was the sales total for that year? what about 2011?
SELECT total, SUM (total), COUNT(*)
FROM invoices
WHERE EXTRACT(YEAR FROM invoice_date) = '2009'
GROUP BY id

SELECT EXTRACT(YEAR FROM invoice_date), SUM(total) AS "Salets Total", COUNT (*)
FROM invoices
--6. how many line items were there for invoice #37?

SELECT COUNT(*)
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_catalog = 'postgres' AND table_name = 'invoices'
   
--7. how many invoices per country?(for #4, there should not be duplicates in the list, figure out how to do that)

--8. show total sales per country, ordered by highest sales first (figure out how to do that)



--all customercs names paired with thier support representative's name (if any)
SELECT e1.first_name ||' '||e1.last_name as "Customer",
	e2.first_name||' '||e2.last_name as "Support Rep."
FROM customers as e1
LEFT JOIN employees AS e2 ON e1.reports_to = e2.id;






-- 1. which artists did not make any albums at all?
SELECT artists.name 
FROM artists
WHERE artists.id NOT IN (
	SELECT artist_id from albums);


-- 2. which artists did not record any tracks of the Latin genre?
SELECT artists.name 
FROM artists
WHERE artists.id NOT IN (
	SELECT artist_id from albums
		WHERE albums.id IN (
			SELECT album_id FROM tracks
			JOIN genres ON tracks.genre_id = genres.id
			WHERE genres.name = 'Latin'));
-- 3. which video track has the longest length? (use media_type table)

			
-- 4. find the names of the customers who live in the same city as the boss employee (the one who reports to nobody)
-- 5. how many audio tracks were bought by German customers? what was the total price paid for them?
-- 6. list the names and countries of the customers supported by an employee who was hired younger than 35.