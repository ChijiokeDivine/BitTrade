# Generated by Django 4.2.3 on 2023-11-19 16:11

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="plan",
            old_name="invested_return",
            new_name="percentage_return",
        ),
        migrations.RemoveField(
            model_name="plan",
            name="sku",
        ),
    ]