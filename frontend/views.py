import json

from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render
# Create your views here.
from django.template import loader
from django.utils.translation import gettext as _
from django.views import generic
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.gzip import gzip_page
from django.views.decorators.http import require_POST


class EventosView(generic.ListView):
    def get_event_amb_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsAmbESList = data["eventos_ambientales"]
        # Get the blog from id and add it to the context
        context = eventsAmbESList
        return eventsAmbESList

    def get_event_soc_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsSocESList = data["eventos_sociales"]

        # Get the blog from id and add it to the context
        context = eventsSocESList
        return eventsSocESList

    def get_event_cor_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsCorESList = data["eventos_corporativas"]
        # Get the blog from id and add it to the context
        context = eventsCorESList
        return eventsCorESList


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
    context = eventsENList
    return eventsENList


@gzip_page
# @cache_page(60 * 15)
def index(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    eventos_soc = EventosView.get_event_soc_es_data()
    eventos_cor = EventosView.get_event_cor_es_data()
    context = {
        'title': _("Inicio"),
        'page': 'index',
        'eventos_amb': eventos_amb,
        'eventos_soc': eventos_soc,
        'eventos': eventos_amb + eventos_soc + eventos_cor,

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
        'eventos': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/plani-ambiental.png'),
    }
    return render(request, '{0}/frontend/ambiental_info.html'.format(request.LANGUAGE_CODE), context)


# Modelo ASG
@gzip_page
def materialidad(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Materialidad y estrategia ASG"),
        'page': 'materialidad',
        'eventos': eventos_amb,
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
        'eventos': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/diversidad_inclusion1.png'),
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
        'eventos': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/vinculacion_comunidad1.png'),
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
    eventos_soc = EventosView.get_event_soc_es_data()
    context = {
        'title': _("Sistema de gobierno"),
        'page': 'sistema_gobierno',
        'eventos': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/sistema_gobierno_h.png'),
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
    eventos_soc = EventosView.get_event_soc_es_data()

    context = {
        'title': _("Grupos de interés"),
        'page': 'grupos-interes',
        'eventos': eventos_soc,
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
        'imagen': staticfiles_storage.url('images/headers/responsabilidad_social.png'),
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
