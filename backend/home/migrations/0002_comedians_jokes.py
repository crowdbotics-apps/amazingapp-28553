# Generated by Django 2.2.20 on 2021-07-07 20:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comedians',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('joke_id', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Jokes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('joke', models.CharField(max_length=10000)),
                ('comedian', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='jokes_comedian', to='home.Comedians')),
            ],
        ),
    ]
