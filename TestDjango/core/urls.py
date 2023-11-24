from django.urls import path
from .views import index
from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('', index, name='index'),
    path('andres', views.andres , name='andres'),
    path('camilo', views.camilo, name='camilo'),
    path('juan', views.juan, name='juan'),
    path('martina', views.martina, name='martina'),   
    path('sofia', views.sofia, name='sofia'),  
    path('Menu', views.Menu, name='Menu'),
    

    #crud
    path('generador', views.generador, name='generador'),

    
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('registro/', views.registro_view, name='registro'),
    path('accounts/profile/', views.profile_view, name='profile'),
    

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

