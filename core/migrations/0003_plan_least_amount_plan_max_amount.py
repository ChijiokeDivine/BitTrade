# Generated by Django 4.2.3 on 2023-11-19 16:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0002_rename_invested_return_plan_percentage_return_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="plan",
            name="least_amount",
            field=models.IntegerField(default="100"),
        ),
        migrations.AddField(
            model_name="plan",
            name="max_amount",
            field=models.IntegerField(default="100"),
        ),
    ]
