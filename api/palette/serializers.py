from rest_framework import serializers

from palette.models import Block


class BlockSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Block
        fields = ["name", "slug", "image_url"]

    def get_image_url(self, block):
        request = self.context.get('request')
        return request.build_absolute_uri(block.image.url)
