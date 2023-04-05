from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ambiental', views.ambiental, name='ambiental'),

    path('materialidad', views.materialidad, name='materialidad'),
    path('nuestro-enfoque-asg', views.nuestro_enfoque_asg, name='nuestro-enfoque-asg'),
    path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),

    path('diversidad-inclusion', views.diversidad_inclusion, name='diversidad-inclusion'),
    path('grupos-interes', views.grupos_interes, name='grupos-interes'),
    path('vinculacion-comunidad', views.vinculacion_comunidad, name='vinculacion-comunidad'),

    path('xxxxx', views.xxxxx, name='xxxxx'),
    path('sistema-gobierno', views.sistema_gobierno, name='sistema_gobierno'),

    path('estrategia-asg', views.estrategia_asg, name='estrategia-asg'),
    path('gestion-ambiental', views.gestion_ambiental, name='gestion-ambiental'),
    path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),
    path('gestion-recursos', views.gestion_recursos, name='gestion-recursos'),
    path('residuos', views.residuos, name='residuos'),
    path('contenido-descargable', views.contenido_descargable, name='contenido-descargable'),
    path('responsabilidad-social', views.responsabilidad_social, name='responsabilidad-social'),
    path('cadena-suministros', views.cadena_suministros, name='cadena-suministros'),
    path('contacto', views.contacto, name='contacto'),
    path('send-subscription', views.send_subscription, name='send-subscription'),
    path('send-mail-contact', views.send_mail_contact, name='send-mail-contact'),
]
