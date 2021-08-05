from django.conf.urls import url
from supplier import views

urlpatterns=[
    url(r'^purchase-orders', views.getPos),
    url(r'^save-purchase-order', views.savePo),
    url(r'^update-purchase-order',views.updatePo)
]