# tracker/models.py
from django.db import models
from django.contrib.auth.models import User

class Expense(models.Model):
    CATEGORIES = [
        ('Food', 'Food'), ('Travel', 'Travel'), ('Books', 'Books'),
        ('Accommodation', 'Accommodation'), ('Entertainment', 'Entertainment'),
        ('Health', 'Health'), ('Shopping', 'Shopping'), ('Other', 'Other'),
    ]
    user     = models.ForeignKey(User, on_delete=models.CASCADE)
    title    = models.CharField(max_length=200)
    amount   = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORIES)
    date     = models.DateField()
    note     = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} - ₹{self.amount}"


class Budget(models.Model):
    user     = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=50)
    limit    = models.DecimalField(max_digits=10, decimal_places=2)
    month    = models.DateField()   # always store as 1st of the month

    class Meta:
        unique_together = ('user', 'category', 'month')


class SavingsGoal(models.Model):
    user   = models.ForeignKey(User, on_delete=models.CASCADE)
    name   = models.CharField(max_length=100)
    target = models.DecimalField(max_digits=10, decimal_places=2)
    saved  = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    icon   = models.CharField(max_length=10, default='🎯')

    def __str__(self):
        return self.name