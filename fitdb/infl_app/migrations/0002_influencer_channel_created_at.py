# Generated by Django 4.2.4 on 2023-11-11 11:55

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("infl_app", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="influencer",
            name="channel_created_at",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]