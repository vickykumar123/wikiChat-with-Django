from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError, AuthenticationFailed
from rest_framework.permissions import IsAuthenticated
from django.db.models import Count

from .models import Server
from .serializer import ServerSerializer

class ServerListViewSet(viewsets.ViewSet):
    queryset = Server.objects.all()
    # permission_classes = [IsAuthenticated]
    def list(self,request):
        category = request.query_params.get("category")
        qty = request.query_params.get('qty')
        by_user = request.query_params.get("by_user") == "true"
        by_server = request.query_params.get("by_server")
        num_of_member = request.query_params.get("num_of_member") == "true"

        if by_user or by_server and not request.user.is_authenticated:
            raise AuthenticationFailed(detail="Unauthorized")

        if category:
            self.queryset = self.queryset.filter(category__name = category)
        if by_user:
            user_id = request.user.id
            self.queryset = self.queryset.filter(member=user_id)

        if num_of_member:
            self.queryset = self.queryset.annotate(num_members=Count("member")) # it will create virtual field call num_member in database and it will count the member field in the database

        if qty:
            self.queryset = self.queryset[: int(qty)]
        if by_server:
            try:
                self.queryset = self.queryset.filter(id=by_server)
                if not self.queryset.exists():
                    raise ValidationError(detail=f"Server with id {by_server} not found")
            except ValueError:
                raise ValidationError(detail=f"Server with id {by_server} not found")


        serializer = ServerSerializer(self.queryset, many=True, context={'num_members':num_of_member})
        return Response(serializer.data)