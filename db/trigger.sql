-- Drop old trigger if exists
DROP TRIGGER IF EXISTS check_budget_after_expense;



-- Trigger: logs a warning when spending exceeds monthly budget
CREATE TRIGGER check_budget_after_expense
AFTER INSERT ON expenses
BEGIN
    INSERT INTO budget_warnings (user_id, category, spent, budget, warning_date)
    SELECT 
        NEW.user_id,
        NEW.category,
        SUM(e.amount),
        b.monthly_budget,
        DATE('now')
    FROM expenses e
    JOIN budgets b ON b.category = NEW.category AND b.user_id = NEW.user_id
    WHERE e.user_id = NEW.user_id AND e.category = NEW.category
    HAVING SUM(e.amount) > b.monthly_budget;
END;