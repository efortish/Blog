from rest_framework.pagination import PageNumberPagination


# This is for pagination, and set how many items you wanna see per page and also set the url by page number example: crispr/blog/?p=2 referring to which page you are seeing

class SmallSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 6


class MediumSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 9


class LargeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 18
    page_size_query_param = 'page_size'
    max_page_size = 18