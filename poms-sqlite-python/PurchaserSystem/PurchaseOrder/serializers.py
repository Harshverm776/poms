from rest_framework import serializers
from PurchaseOrder.models import PurchaseOrder

class PurchaseOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields='__all__'
    
    def validate_item_price(self, value):
        if value <= 0:
            raise serializers.ValidationError("must be greater than zero")
        return value
    
    def validate_item_quantity(self, value):
        if value <= 0:
            raise serializers.ValidationError("must be greater than zero")
        return value
    
    def validate_po_status(self, value):
        if value != "Pending" and value != "Approved" and value != "Rejected":
            raise serializers.ValidationError("can be Pending, Approved, Rejected")
        return value