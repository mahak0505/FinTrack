//fake values 
INSERT INTO users VALUES (1, 'Ansh Zamde', 'ansh@davv.ac.in', 'password123', 'IET DAVV');
INSERT INTO users VALUES (2, 'Rahul Sharma', 'rahul@davv.ac.in', 'password123', 'IET DAVV');

INSERT INTO income VALUES (1, 1, 'Scholarship', 'Scholarship', 6500, '2026-03-01');
INSERT INTO income VALUES (2, 1, 'Freelance Work', 'Freelance', 2000, '2026-03-15');
INSERT INTO income VALUES (3, 2, 'Scholarship', 'Scholarship', 5000, '2026-03-01');

INSERT INTO expenses VALUES (1, 1, 'Swiggy Order', 'Food', 320, '2026-03-30', 'Late night order');
INSERT INTO expenses VALUES (2, 1, 'College Bus Pass', 'Travel', 200, '2026-03-29', NULL);
INSERT INTO expenses VALUES (3, 1, 'Algorithm Book', 'Books', 360, '2026-03-28', 'DSA book');
INSERT INTO expenses VALUES (4, 1, 'Hostel Fee', 'Accommodation', 1800, '2026-03-25', NULL);
INSERT INTO expenses VALUES (5, 1, 'Zomato', 'Food', 180, '2026-03-27', NULL);
INSERT INTO expenses VALUES (6, 2, 'Mess Bill', 'Food', 1200, '2026-03-26', NULL);
INSERT INTO expenses VALUES (7, 2, 'Auto Fare', 'Travel', 150, '2026-03-28', NULL);

INSERT INTO budgets VALUES (1, 1, 'Food', 2500);
INSERT INTO budgets VALUES (2, 1, 'Travel', 1000);
INSERT INTO budgets VALUES (3, 1, 'Books', 1000);
INSERT INTO budgets VALUES (4, 1, 'Accommodation', 3000);
INSERT INTO budgets VALUES (5, 1, 'Fun', 1500);
INSERT INTO budgets VALUES (6, 2, 'Food', 2000);
INSERT INTO budgets VALUES (7, 2, 'Travel', 800);

INSERT INTO goals VALUES (1, 1, 'Laptop Fund', 15000, 9600, '2026-08-01');
INSERT INTO goals VALUES (2, 1, 'Goa Trip', 8000, 2240, '2026-05-15');
INSERT INTO goals VALUES (3, 2, 'New Phone', 12000, 3000, '2026-07-01');