# Generated by Django 4.2.3 on 2023-11-30 17:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("userauths", "0011_alter_withdraw_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="transaction",
            name="amount",
            field=models.DecimalField(decimal_places=2, default="0.00", max_digits=100),
        ),
    ]
