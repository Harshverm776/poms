# Generated by Django 3.2.4 on 2021-07-05 05:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PurchaseOrder',
            fields=[
                ('po_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('purchaser_name', models.CharField(max_length=45)),
                ('address', models.CharField(max_length=60)),
                ('po_status', models.CharField(default='Pending', max_length=45)),
                ('item_name', models.CharField(max_length=45)),
                ('item_price', models.PositiveIntegerField()),
                ('item_quantity', models.PositiveIntegerField()),
                ('item_description', models.CharField(max_length=100)),
                ('item_type', models.CharField(max_length=60)),
                ('date_of_order', models.DateTimeField(auto_now_add=True)),
                ('date_of_update', models.DateTimeField(auto_now=True)),
                ('updated_by', models.CharField(default='None', max_length=45)),
            ],
        ),
    ]