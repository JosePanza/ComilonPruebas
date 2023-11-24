from distutils.command.upload import upload
from pyexpat import model
from django.db import models
from typing import Any,Dict, Tuple


# Create your models here.

class usuario(models.Model):
    ID_usuario       =  models.AutoField( primary_key=True, db_column='id')
    nombre_usuario   =  models.CharField(max_length=30, blank=False, null=False)
    descripcion      =  models.CharField(max_length=50, blank=False, null=False)
    img              =  models.FileField(upload_to='img/', null=False, blank=False, verbose_name='img')


    def __str__(self):
        return str(self.ID_usuario)
