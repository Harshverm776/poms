import uuid

from django.db import models


# Create your models here.
class PurchaseOrder(models.Model):
    po_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    purchaser_name = models.CharField(max_length=45,null=False)
    address = models.CharField(max_length=60,null=False)
    po_status = models.CharField(max_length=45,default='Pending',null=False)
    item_name = models.CharField(max_length=45,null=False)
    item_price = models.PositiveIntegerField(null=False)
    item_quantity = models.PositiveIntegerField(null=False)
    item_description = models.CharField(max_length=100,null=False)
    item_type = models.CharField(max_length=60,null=False)
    date_of_order = models.DateTimeField(auto_now_add=True)
    date_of_update = models.DateTimeField(auto_now=True)
    updated_by = models.CharField(max_length=45,null=False,default='None')
