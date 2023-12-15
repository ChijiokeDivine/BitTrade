# Generated by Django 4.2.3 on 2023-11-21 13:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0007_alter_plan_interval"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserComplaints",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("question", models.CharField(max_length=50)),
                ("question_details", models.TextField(blank=True, null=True)),
            ],
        ),
    ]