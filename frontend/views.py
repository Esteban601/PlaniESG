from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.gzip import gzip_page
from django.views.decorators.http import require_POST
from django.views.decorators.cache import cache_page
from django.contrib.staticfiles.storage import staticfiles_storage
from django.utils.translation import gettext as _
import requests
from django.views import generic


class EventosView(generic.ListView):
    def get_event_amb_es_data():
        eventsAmbESList = [
            {
                "title": "Banco de Tapitas Enero-Julio 2022",
                "date": "2022-06-01",
                "description": "Se realizó una donación de más de 3 mil tapitas.",
                "url": "",
                "img": "images/eventos/Banco-de-tapitas-enero-julio-2022.webp"
            },
            {
                "title": "Máquinas de Reciclaje-AlEn",
                "date": "2022-06-01",
                "description": "De enero-julio 2022 se reciclaron más de 600 mil botellas de plástico que equivale a una disminución de 30 mil kg de CO2.",
                "url": "",
                "img": "images/eventos/Reciclar-para-ganar-Enero-julio-2022.png"
            },
            {
                "title": "Máquinas de Reciclaje-AIEn",
                "date": "2022-03-01",
                "description": "De enero-abril 2022 se reciclaron más de 300 mil botellas de plástico equivalentes a una reducción de 17,642 kg de CO2",
                "url": "",
                "img": "images/eventos/Reciclar-para-ganar-abril-2022.png"
            },
            {
                "title": "Reciclar para ganar. Alianza con grupo AIEn",
                "date": "2022-03-01",
                "description": "En lo que va del 2022 se han reciclado 324,448 botellas de plástico, una reducción de 17,642 kg de CO2",
                "url": "",
                "img": "images/eventos/Reciclar-2022-324-botellas.png"
            },
            {
                "title": "Donación de Materiales a Fundación Hélice",
                "date": "2022-03-01",
                "description": "Se realizó una donación con la cual se obtuvieron diversos beneficios ambientales",
                "url": "",
                "img": "images/eventos/Helice.png"
            },

        ]
        # Get the blog from id and add it to the context
        context =  eventsAmbESList
        return eventsAmbESList


    def get_event_soc_es_data():
        eventsSocESList = [
            {
                "title": "Inauguración de “ESPAZIOS IEMUJERES Y PUNTO NARANJA” ",
                "date": "2022-06-01",
                "description": "Inauguración de espacios para mujeres emprendedoras, así como un punto para atender y apoyar a mujeres que se sientan inseguras.",
                "url": "",
                "img": "images/eventos_soc/ESPAZIOS-IEMUJERES-Y-PUNTO-NARANJA.jpg"
            },
            {
                "title": "Encendido de arbolitos 2022",
                "date": "2022-06-01",
                "description": "Se realizo el tradicional encendido de arbolitos navideños 2022 en nuestros centros comerciales.",
                "url": "",
                "img": "images/eventos_soc/encendido-arbolito.jpeg"
            },
            {
                "title": "Alianza Fundación Lilo",
                "date": "2022-06-01",
                "description": "Nuestro programa “MANOS AL CORAZÓN” brinda apoyo con gastos hospitalarios y dispositivos",
                "url": "",
                "img": "images/eventos_soc/fundacion-lilo.png"
            },
            {
                "title": "Reconocimiento a CiudadelaUV por el banco de tapitas ",
                "date": "2022-06-01",
                "description": "Reconocimiento al Banco de Tapitas A.C por su participación en Programa de Recolección de Tapitas de plástico.",
                "url": "",
                "img": "images/eventos_soc/Banco-tapitas-Junio-Ciudadela.png"
            },
            {
                "title": "Entrega de juguetes",
                "date": "2022-06-01",
                "description": "Se realizo la entrega de juguetes que se recolectaron con la alianza DIF de Santa Catarina y Alianza Anticáncer.",
                "url": "",
                "img": "images/eventos_soc/entrega_juguetes.jpg"
            },
            {
                "title": "Apoyo a Fundación ALIANZA ANTICÁNCER",
                "date": "2022-06-01",
                "description": "En conjunto con el DIF de Santa Catarina se recaudaron 382 artículos entre juguetes y taparroscas",
                "url": "",
                "img": "images/eventos_soc/Alianza-anti-cancer.png"
            },
            {
                "title": "Teletón Coahuila",
                "date": "2022-06-01",
                "description": "Se contribuyo en la atención médica y rehabilitación de calidad para niñas y niños del CRIT Coahuila.",
                "url": "",
                "img": "images/eventos_soc/Teletn.png"
            },
            {
                "title": "Corazones Rosa en Colaboración con Grupo AIEn",
                "date": "2022-06-01",
                "description": "Se recolectaron tapitas en puntos estratégicos de nuestras plazas, que se transformaron en un donativo para la fundación Asociación Unidas Contigo.",
                "url": "",
                "img": "images/eventos_soc/Corazones-rosas-con-grupo-alen.jpg"
            },
            {
                "title": "Patrocinadores Oficiales de Reciclatón 2021 Fundación Teletón",
                "date": "2022-06-01",
                "description": "Planigrupo realizó un donativo para apoyar a los niños del CRIT Coahuila.",
                "url": "",
                "img": "images/eventos_soc/Reciclaton.jpg"
            },
            {
                "title": "Banco de Tapitas febrero 2022",
                "date": "2022-06-01",
                "description": "Más de 40 toneladas, 750 quimioterapias, 1,500 suplementos alimenticios y 500 pacientes atendidos.",
                "url": "",
                "img": "images/eventos_soc/Banco-Tapitas-febrero-2022.jpeg"
            },
            {
                "title": "Donativo en el Día de los Abuelos",
                "date": "2022-06-01",
                "description": "Se realizo visita y apoyo a asilos de abuelos en 4 comunidades, Cd Juárez, Guadalajara, Monterrey y Saltillo",
                "url": "",
                "img": "images/eventos_soc/donativo-abuelos.jpg"
            },
            {
                "title": "Donativo Mobiliario a “Casa Hogar Manos de Amor por Bahía”",
                "date": "2022-06-01",
                "description": "Se realizó un donativo de mobiliario para niños en situación de pobreza extrema, huérfanos, entre otros",
                "url": "",
                "img": "images/eventos_soc/Donativo-hogar-manos-amor-por-habia.jpg"
            },
            {
                "title": "Rosca de Reyes 2020",
                "date": "2022-06-01",
                "description": "Se realizó la tradicional rosca de reyes y diversas actividades con los reyes magos",
                "url": "",
                "img": "images/eventos_soc/dia-reyes.png"
            },
            {
                "title": "Sanitización de Centros Comerciales a Nivel Nacional",
                "date": "2022-06-01",
                "description": "Se realizo la sanitización de centros comerciales para brindar mayor seguridad a los clientes",
                "url": "",
                "img": "images/eventos_soc/planigrupo-busca-adquirir-dos-centros-comerciales.png"
            },
            {
                "title": "Recolección de tapitas para niños con cáncer",
                "date": "2022-06-01",
                "description": "Agradecemos a las personas que han recolectado tapitas y se han sumado a esta causa.",
                "url": "",
                "img": "images/eventos_soc/Recoleccion-tapitas-para-niños-con-cancer.jpg"
            },

        ]
        # Get the blog from id and add it to the context
        context =  eventsSocESList
        return eventsSocESList


    def get_event_en_data():
        eventsENList = [
            {
                "title": "VIVA AEROBUS REPORTS MONTHLY PASSENGER FIGURES CORRESPONDING TO FEBRUARY 2023",
                "date": "2023-03-08",
                "description": "description",
                "url": "https://investorcloud.s3.amazonaws.com/VivaAerobus/InformacionFinanciera/SalaPrensa/2023-03-08-Trafico-febrero-2023-en.pdf"
            }
        ]
        # Get the blog from id and add it to the context
        context =  eventsENList
        return eventsENList


@gzip_page
# @cache_page(60 * 15)
def index(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    eventos_soc = EventosView.get_event_soc_es_data()
    context = {
        'title': _("Inicio"),
        'page': 'index',
        'eventos_amb': eventos_amb,
        'eventos_soc': eventos_soc,

    }
    return render(request, '{0}/frontend/index.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def ambiental(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Ambiental"),
        'page': 'ambiental',
        'eventos_amb': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/plani-ambiental.png'),
    }
    return render(request, '{0}/frontend/ambiental.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def ambiental_info(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Ambiental"),
        'page': 'ambiental',
        'eventos_amb': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/plani-ambiental.png'),
    }
    return render(request, '{0}/frontend/ambiental_info.html'.format(request.LANGUAGE_CODE), context)


# Modelo ASG
@gzip_page
def materialidad(request):
    context = {
        'title': _("Materialidad"),
        'page': 'materialidad',
        'imagen': staticfiles_storage.url('images/headers/plani-materialidad.png'),
    }
    return render(request, '{0}/frontend/modelo_asg/materialidad.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def nuestro_enfoque_asg(request):
    context = {
        'title': _("Nuestro enfoque ASG"),
        'page': 'nuestro-enfoque-asg',
        'imagen': staticfiles_storage.url('images/headers/plani-asg.png'),
    }
    return render(request, '{0}/frontend/modelo_asg/nuestro_enfoque_asg.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def vinculacion_ods(request):
    context = {
        'title': _("Vinculación con los ODS"),
        'page': 'vinculacion-ods',
        'imagen': staticfiles_storage.url('images/headers/plani-ods.png'),
    }
    return render(request, '{0}/frontend/modelo_asg/vinculacion_ods.html'.format(request.LANGUAGE_CODE), context)


# Responsabilidad social
@gzip_page
def diversidad_inclusion(request):
    eventos_soc = EventosView.get_event_soc_es_data()
    context = {
        'title': _("Diversidad e inclusión"),
        'page': 'diversidad-inclusion',
        'eventos_soc': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/plani-inclusion.png'),
    }
    return render(request,
                  '{0}/frontend/responsabilidad_social/diversidad_inclusion.html'.format(request.LANGUAGE_CODE),
                  context)


@gzip_page
def vinculacion_comunidad(request):
    eventos_soc = EventosView.get_event_soc_es_data()
    context = {
        'title': _("Vinculación con la comunidad"),
        'page': 'vinculacion-comunidad',
        'eventos_soc': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/plani-vinculacion-comunidad.png'),
    }
    return render(request,
                  '{0}/frontend/responsabilidad_social/vinculacion_comunidad.html'.format(request.LANGUAGE_CODE),
                  context)


# Gobernanza
@gzip_page
def gobernanza(request):
    context = {
        'title': _("Gobernanza"),
        'page': 'gobernanza',
        'imagen': staticfiles_storage.url('images/headers/plani-gobierno.png'),
    }
    return render(request, '{0}/frontend/gobernanza.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def gobernanza_info(request):
    context = {
        'title': _("Gobernanza"),
        'page': 'gobernanza',
        'imagen': staticfiles_storage.url('images/headers/plani-gobierno.png'),
    }
    return render(request, '{0}/frontend/gobernanza_info.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def sistema_gobierno(request):
    context = {
        'title': _("Sistema de gobierno"),
        'page': 'sistema_gobierno',
        'imagen': staticfiles_storage.url('images/headers/plani-gobierno.png'),
    }
    return render(request, '{0}/frontend/gobernanza/sistema_gobierno.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def estrategia_asg(request):
    context = {
        'title': _("Estrategia ASG"),
        'page': 'estrategia-asg',
        'imagen': staticfiles_storage.url('images/headers/Estrategia-ASG.png'),
    }
    return render(request, '{0}/frontend/modelo_asg/estrategia_asg.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def grupos_interes(request):
    context = {
        'title': _("Grupos de interés"),
        'page': 'grupos-interes',
        'imagen': staticfiles_storage.url('images/headers/plani-grupos-de-interes.png'),
    }
    return render(request,
                  '{0}/frontend/gobernanza/grupos_interes.html'.format(request.LANGUAGE_CODE),
                  context)


# Medio Ambiente
@gzip_page
def gestion_ambiental(request):
    context = {
        'title': _("Gestión Ambiental"),
        'page': 'gestion-ambiental',
        'imagen': staticfiles_storage.url('images/headers/Gestion_ambiental_h.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/gestion_ambiental.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def vinculacion_ods(request):
    context = {
        'title': _("Vinculación con los ODS"),
        'page': 'vinculacion-ods',
        'imagen': staticfiles_storage.url('images/headers/plani-ods.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/vinculacion_ods.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def gestion_recursos(request):
    context = {
        'title': _("Gestión de Recursos"),
        'page': 'gestion-recursos',
        'imagen': staticfiles_storage.url('images/headers/Gestion-Recursos.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/gestion_recursos.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def residuos(request):
    context = {
        'title': _("Residuos"),
        'page': 'residuos',
        'imagen': staticfiles_storage.url('images/headers/Residuos.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/residuos.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def contenido_descargable(request):
    context = {
        'title': _("Contenido Descargable (Reporte)"),
        'page': 'contenido-descargable',
        'imagen': staticfiles_storage.url('images/headers/Contenido-Descargable.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/contenido_descargable.html'.format(request.LANGUAGE_CODE),
                  context)


# Responsabilidad Social
@gzip_page
def responsabilidad_social(request):
    context = {
        'title': _("Responsabilidad Social"),
        'page': 'responsabilidad-social',
        'imagen': staticfiles_storage.url('images/headers/Responsabilidad_social_h.png'),
    }
    return render(request, '{0}/frontend/responsabilidad_social.html'.format(request.LANGUAGE_CODE), context)


# Responsabilidad Social
@gzip_page
def responsabilidad_social_info(request):
    eventos_soc = EventosView.get_event_soc_es_data()

    context = {
        'title': _("Responsabilidad Social"),
        'page': 'responsabilidad-social',
        'eventos_soc': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/Responsabilidad_social_h.png'),
    }
    return render(request, '{0}/frontend/responsabilidad_social_info.html'.format(request.LANGUAGE_CODE), context)


# Cadena de Suministros
@gzip_page
def cadena_suministros(request):
    context = {
        'title': _("Cadena de Suministros"),
        'page': 'cadena-suministros',
        'imagen': staticfiles_storage.url('images/headers/Materialidad.png'),
    }
    return render(request, '{0}/frontend/cadena_suministros.html'.format(request.LANGUAGE_CODE),
                  context)


@gzip_page
def contacto(request):
    # if request.LANGUAGE_CODE == 'es':
    #     imagen = staticfiles_storage.url('images/contacto-pic.png')
    # else:
    #     imagen = staticfiles_storage.url('images/contact.png')

    context = {
        'title': _("Contacto"),
        'page': 'contacto',
        'section': _('Contacto'),
        'imagen': staticfiles_storage.url('images/headers/plani-contacto.png'),

        # 'imagen': imagen,
    }
    return render(request, '{0}/frontend/contacto.html'.format(request.LANGUAGE_CODE), context)


@csrf_exempt
@require_POST
def send_subscription(request):
    email = request.POST['email']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail.html'.format(request.LANGUAGE_CODE),
        {
            'email': email,
        }
    )

    send_mail(
        'Usuario ' + email + ' desea subscribirse al  sitio Finn ESG',
        'Usuario con email ' + email + " desea subscribirse",
        'it@investorcloud.net',
        ['it@irstrat.com'],
        html_message=html_message
    )

    return JsonResponse({"success": "true"}, safe=False)


@require_POST
def send_mail_contact(request):
    context = {'title': 'Inicio'}
    name = request.POST['form_name']
    # company = request.POST['form_company']
    email = request.POST['form_email']
    phone = request.POST['form_phone']
    # country = request.POST['form_country']
    # state = request.POST['form_state']
    theme = request.POST['form_theme']
    message = request.POST['form_message']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail_contact.html'.format(request.LANGUAGE_CODE),
        {
            'name': name,
            # 'company': company,
            'email': email,
            'phone': phone,
            # 'country': country,
            # 'state': state,
            'theme': theme,
            'message': message
        }
    )

    # send_mail(
    #     'Usuario anónimo desea contactar con admin del sitio Fortaleza',
    #     '',
    #     'it@investorcloud.net',
    #     [theme, ],  # ['info@murano.com.mx',],
    #     html_message=html_message
    # )

    send_mail(
        'Usuario anónimo desea contactar con admin del sitio Finn ESG',
        '',
        'it@investorcloud.net',
        ['it@irstrat.com'],
        # ['tania.barroso@irstrat.com'],
        html_message=html_message
    )
    return JsonResponse({"success": "true"}, safe=False)
