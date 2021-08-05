from django.conf.urls import url

from PurchaseOrder import views

urlpatterns=[
    url(r'^purchase-order', views.getPos),
    url(r'^create-purchase-order', views.createPo),
    url(r'^update-purchase-order',views.updatePo)
]
