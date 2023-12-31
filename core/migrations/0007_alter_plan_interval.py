# Generated by Django 4.2.3 on 2023-11-19 16:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0006_plan_interval"),
    ]

    operations = [
        migrations.AlterField(
            model_name="plan",
            name="interval",
            field=models.CharField(
                choices=[
                    ("daily", "daily"),
                    ("weekly", "weekly"),
                    ("monthly", "monthly"),
                    ("hourly", "hourly"),
                ],
                default="daily",
                max_length=16,
            ),
        ),
    ]
