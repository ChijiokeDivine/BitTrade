# Generated by Django 4.2.3 on 2023-11-21 19:50

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0008_usercomplaints"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="usercomplaints",
            options={"verbose_name_plural": "User Complaints"},
        ),
    ]
