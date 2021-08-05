from rest_framework.test import APITestCase

from PurchaseOrder.models import PurchaseOrder


class TestPurchaseOrder(APITestCase):
    get_url = "/purchase-order"
    post_url = "/create-purchase-order"
    patch_url = "/update-purchase-order"

    def setUp(self):
        PurchaseOrder.objects.create(po_id= "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
        purchaser_name= "Aryan",
        address= "Mhow",
        po_status= "Pending",
        item_name= "One Plus Mobile",
        item_price= 5550,
        item_quantity= 80,
        item_description= "Mobile XYZ description",
        item_type= "Mobile",
        date_of_order= "2021-07-06T12:23:39.576550Z",
        date_of_update= "2021-07-06T12:23:39.576550Z",
        updated_by= "None")
    
    def test_get_pos(self):
        response = self.client.get(self.get_url)
        result = response.json()
        self.assertEqual(response.status_code,200)
        self.assertIsInstance(result, list)
        self.assertEqual(result[0]["po_id"], "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777")
    
    def test_post_creat_po(self):
        data = {
            "purchaser_name": "Harsh",
            "address": "Mhow",
            "item_name": "Mi Mobile",
            "item_price": 10000,
            "item_quantity": 1,
            "item_description": "Mobile XYZ description",
            "item_type": "Mobile"
        }

        response = self.client.post(self.post_url, data=data, format='json')
        result = response.json()
        self.assertEqual(response.status_code, 201)
        self.assertEqual(result.get("message"), "purchase order successfully created")

    def test_post_creat_po_badrequest(self):
        data = {
            "purchaser_name": "Harsh",
            "address": "Mhow",
            "item_name": "Mi Mobile",
            "item_price": 0,
            "item_quantity": 1,
            "item_description": "Mobile XYZ description",
            "item_type": "Mobile"
        }

        response = self.client.post(self.post_url, data=data, format='json')
        result = response.json()
        self.assertEqual(response.status_code, 400)

    def test_patch_update_po(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "po_status": "Rejected",
            "updated_by": "Amit"
        }

        response = self.client.patch(self.patch_url, data=data, format='json')
        result = response.json()

        self.assertEqual(response.status_code, 200)
        self.assertEqual(result.get("message"), "Updated Successfully")
        po_data = PurchaseOrder.objects.get(po_id="f32f8dda-ef6a-444f-bc2e-2bc2a6c12777")
        self.assertEqual(po_data.po_status,"Rejected")
    
    def test_patch_update_po_badrequest(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "po_status": "Reject",
            "updated_by": "Amit"
        }

        response = self.client.patch(self.patch_url, data=data, format='json')
        result = response.json()

        self.assertEqual(response.status_code, 400)
