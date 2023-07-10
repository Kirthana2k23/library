from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookSearchView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        return Book.objects.filter(title__icontains=query)
