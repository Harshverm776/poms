from rest_framework.test import APITestCase

from supplier.models import PurchaseOrder, Supplier


class TestSuppier(APITestCase):
    get_url = "/purchase-orders"
    post_url = "/save-purchase-order"
    patch_url = "/update-purchase-order"

    def setUp(self):
        PurchaseOrder.objects.create(
            id= 2,
            po_id= "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            supplier_name= "Nike",
            req_item_name= "Shoes XYZ",
            req_item_quantity= 1,
            date_of_order_received= "2021-07-08T08:29:49.792160Z",
            status= "Pending",
            date_of_update= "2021-07-08T08:29:49.792160Z",
            updated_by= "Not available"
        )
        Supplier.objects.create(
            supplier_name= "Nike",
            item_name= "Shoes XYZ",
            item_type= "Shoes",
            item_available_quantity= 400,
            item_price= 2000
        )
    
    def test_get_pos(self):
        response = self.client.get(self.get_url)
        result = response.json()

        self.assertEqual(response.status_code,200)
        self.assertIsInstance(result, list)
        self.assertEqual(result[0]["po_id"], "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777")
    
    def test_post_save_po(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "supplier_name": "Nike",
            "req_item_name": "Shoes XYZ",
            "req_item_quantity": 1
        }

        response = self.client.post(self.post_url, data=data, format='json')
        result = response.json()
        self.assertEqual(response.status_code, 201)
        self.assertEqual(result.get("message"), "purchase order successfully saved")

    def test_post_creat_po_badrequest(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "supplier_name": "",
            "req_item_name": "Shoes XYZ",
            "req_item_quantity": 1
        }

        response = self.client.post(self.post_url, data=data, format='json')
        result = response.json()
        self.assertEqual(response.status_code, 400)

    def test_patch_update_po(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "status": "Accepted",
            "req_item_name": "Shoes XYZ",
            "updated_by": "Rohit"
        }

        response = self.client.patch(self.patch_url, data=data, format='json')
        result = response.json()

        self.assertEqual(response.status_code, 200)
        self.assertEqual(result.get("message"), "Updated Successfully")
        po_data = PurchaseOrder.objects.get(po_id="f32f8dda-ef6a-444f-bc2e-2bc2a6c12777")
        self.assertEqual(po_data.status,"Accepted")
    
    def test_patch_update_po_badrequest(self):
        data = {
            "po_id": "f32f8dda-ef6a-444f-bc2e-2bc2a6c12777",
            "status": "Ac",
            "req_item_name": "Shoes XYZ",
            "updated_by": "Rohit"
        }

        response = self.client.patch(self.patch_url, data=data, format='json')
        result = response.json()

        self.assertEqual(response.status_code, 400)