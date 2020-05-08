from django.shortcuts import render
from rest_framework import generics

from palette.models import Block
from palette.serializers import BlockSerializer


class BlockListView(generics.ListAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockSerializer
