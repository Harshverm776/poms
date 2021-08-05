from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from PurchaseOrder.models import PurchaseOrder
from PurchaseOrder.serializers import PurchaseOrderSerializer

@api_view(['GET'])
def getPos(request):
    pos = PurchaseOrder.objects.all()
    pos_serializer = PurchaseOrderSerializer(pos, many=True)
    return Response(pos_serializer.data, status=200)

@api_view(['POST'])
def createPo(request):
    try:
        po_data = JSONParser().parse(request)
        pos_serializer = PurchaseOrderSerializer(data=po_data)
        if pos_serializer.is_valid():
            pos_serializer.save()
            return Response({"message": "purchase order successfully created"}, status=201)
        return Response({"message" : pos_serializer.errors}, status=400)
    except Exception as ex:
        return Response({"Exception": f"{ex}"}, status=400)

@api_view(['PATCH'])
def updatePo(request):
    try:
        po_data = JSONParser().parse(request)
        po = PurchaseOrder.objects.get(po_id=po_data['po_id'])
        po_serializer = PurchaseOrderSerializer(po, data=po_data, partial=True)
        if po_serializer.is_valid():
            po_serializer.save()
            return Response({"message": "Updated Successfully"}, status=200)
        return Response({"message" : po_serializer.errors}, status=400)
    except Exception as ex:
        return Response({"message": f"{ex}"}, status=400)
