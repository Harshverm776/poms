from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view

from supplier.models import PurchaseOrder, Supplier
from supplier.serializers import PurchaseOrderSerializer

@api_view(['GET'])
def getPos(request):
    pos = PurchaseOrder.objects.all()
    pos_serializer = PurchaseOrderSerializer(pos, many=True)
    return Response(pos_serializer.data, status=200)

@api_view(['PATCH'])
def updatePo(request):
    try:
        po_data = JSONParser().parse(request)
        po = PurchaseOrder.objects.get(po_id=po_data['po_id'])
        item_data = Supplier.objects.get(item_name=po_data['req_item_name'])
        po_serializer = PurchaseOrderSerializer(po, data=po_data, partial=True)
        if po_serializer.is_valid():
            if po_data['status'] == 'Accepted':
                if po.req_item_quantity <= item_data.item_available_quantity:
                    item_data.item_available_quantity -= po.req_item_quantity 
                    item_data.save()
                else:
                    return Response({"message": "Requested quantity is more than available quantity"}, status=400)
            po_serializer.save()
            return Response({"message": "Updated Successfully"}, status=200)
        return Response({"message" : po_serializer.errors}, status=400)
    except Exception as ex:
        return Response({"Exception": f"{ex}"}, status=400)

# Temporary
@api_view(['POST'])
def savePo(request):
    try:
        po_data = JSONParser().parse(request)
        pos_serializer = PurchaseOrderSerializer(data=po_data)
        if pos_serializer.is_valid():
            pos_serializer.save()
            return Response({"message": "purchase order successfully saved"}, status=201)
        return Response({"message" : pos_serializer.errors}, status=400)
    except Exception as ex:
        return Response({"Exception": f"{ex}"}, status=400)