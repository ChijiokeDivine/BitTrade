# Generated by Django 4.2.3 on 2023-11-30 11:16

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("userauths", "0010_alter_withdraw_user"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="withdraw",
            options={"verbose_name_plural": "Withdrawal Requests"},
        ),
    ]
