from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),

    path('materialidad', views.materialidad, name='materialidad'),
    path('estrategia-asg', views.estrategia_asg, name='estrategia-asg'),
    path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),

    path('gestion-ambiental', views.gestion_ambiental, name='gestion-ambiental'),
    path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),
    path('gestion-recursos', views.gestion_recursos, name='gestion-recursos'),
    path('residuos', views.residuos, name='residuos'),
    path('contenido-descargable', views.contenido_descargable, name='contenido-descargable'),

    path('responsabilidad-social', views.responsabilidad_social, name='responsabilidad-social'),
    path('gobernanza', views.gobernanza, name='gobernanza'),

    path('cadena-suministros', views.cadena_suministros, name='cadena-suministros'),

    path('contacto', views.contacto, name='contacto'),

    path('send-subscription', views.send_subscription, name='send-subscription'),
    path('send-mail-contact', views.send_mail_contact, name='send-mail-contact'),
]
