from django.db import models

# Create your models here.
class PurchaseOrder(models.Model):
    po_id = models.CharField(max_length=60, null=False)
    supplier_name = models.CharField(max_length=45,null=False)
    req_item_name = models.CharField(max_length=45,null=False)
    req_item_quantity = models.PositiveIntegerField(null=False)
    date_of_order_received = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=45,default='Pending',null=False)
    date_of_update = models.DateTimeField(auto_now=True)
    updated_by = models.CharField(max_length=45,null=False,default='Not available')

class Supplier(models.Model):
    supplier_name = models.CharField(max_length=45,null=False)
    item_name = models.CharField(max_length=45,null=False)
    item_type = models.CharField(max_length=60,null=False)
    item_available_quantity = models.PositiveIntegerField(null=False)
    item_price = models.PositiveIntegerField(null=False)