# Generated by Django 4.2.4 on 2023-11-11 12:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("infl_app", "0002_influencer_channel_created_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="influencer",
            name="channel_created_at",
            field=models.DateField(blank=True, null=True),
        ),
    ]