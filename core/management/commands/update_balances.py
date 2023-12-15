# yourapp/management/commands/update_balances.py
from django.core.management.base import BaseCommand
from userauths.models import Transaction
from django.utils import timezone

import schedule
import time

class Command(BaseCommand):
    help = 'Update user balances based on transactions'

    def handle(self, *args, **options):
        schedule.every().day.at("00:00").do(self.update_balances)

        while True:
            schedule.run_pending()
            time.sleep(1)

    def update_balances(self):
        # Get transactions that match the interval and are not processed yet
        transactions = Transaction.objects.filter(
            interval__in=['daily', 'weekly', 'monthly'],
            timestamp__lt=timezone.now(),
        )

        for transaction in transactions:
            # Calculate the new balance based on percentage_return
            increment_amount = (transaction.amount * transaction.percentage_return) / 100
            new_balance = transaction.user.balance + increment_amount

            # Update the user's balance
            transaction.user.balance = new_balance
            transaction.user.save()

            # Mark the transaction as processed
            transaction.timestamp = timezone.now()
            transaction.save()

        self.stdout.write(self.style.SUCCESS('User balances updated successfully'))
