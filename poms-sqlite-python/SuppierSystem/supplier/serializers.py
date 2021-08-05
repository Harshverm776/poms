from rest_framework import serializers
from supplier.models import PurchaseOrder, Supplier

class PurchaseOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields='__all__'
    
    def validate_status(self, value):
        if value != "Pending" and value != "Accepted" and value != "Rejected" and value!= "Send for discussion":
            raise serializers.ValidationError("can be Pending, Accepted, Rejected, Send for discussion")
        return value

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields='__all__'
