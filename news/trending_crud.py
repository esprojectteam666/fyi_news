
from common.models import Website, Trending_news
from django.http import HttpResponse, JsonResponse
import json


def dispatcher(request):
    if request.method == 'GET':
        request.params = request.GET

    elif request.method in ['POST', 'PUT', 'DELETE']:
        request.params = json.loads(request.body)

    action = request.params['action']
    if action == 'list_TendingNews':
        return list_TendingNews(request)
    elif action == 'add_TendingNews':
        return addcustomer(request)
    elif action == 'modify_TendingNews':
        return modifycustomer(request)
    elif action == 'del_TendingNews':
        return deletecustomer(request)

    else:
        return JsonResponse({'ret': 1, 'msg': '不支持该类型http请求'})


def list_TendingNews(request):
    qs = Trending_news.objects.values()
    title_filter = request.GET.get('title', None)
    date_filter = request.GET.get('date', None)

    if title_filter:
        qs = qs.filter(title=title_filter)

    if date_filter:
        qs = qs.filter(update_time=date_filter)
    # http://127.0.0.1:8000/news/websites/trending/?title=OMG

    retlist = list(qs)
    return JsonResponse({'ret': 0, 'retlist': retlist})
