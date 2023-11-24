from django.forms import ModelForm
from django import forms
from .models import usuario

class usuariosform(forms.ModelForm):
    class Meta:
        model = usuario 
        #fields = ['ID_usuario', 'nombre_usuario', 'descripcion', 'img'] 
   
        fields = '__all__' 