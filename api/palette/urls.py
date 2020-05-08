from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from palette.views import BlockListView

urlpatterns = [
    path('blocks/', BlockListView.as_view(), name="blocks-all")
]

print(urlpatterns)
