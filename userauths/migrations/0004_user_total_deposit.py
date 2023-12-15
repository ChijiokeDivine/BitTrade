# Generated by Django 4.2.3 on 2023-11-21 19:50

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("userauths", "0003_alter_transaction_description"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="total_deposit",
            field=models.DecimalField(
                decimal_places=2, default="0.00", max_digits=1000
            ),
        ),
    ]