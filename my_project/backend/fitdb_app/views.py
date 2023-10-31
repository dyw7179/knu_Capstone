from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import openai
import glob
import json

openai.api_key = "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"

messages = []
def gpt_endpoint(request):
    if request.method == 'POST':
        # POST 요청을 처리하고 GPT-3.5 Turbo 모델을 사용하여 추천 생성
        input_data = request.POST.get('input')
        # 이후 GPT 모델을 호출하고 추천을 생성하는 로직 추가

        # 추천을 JSON 형식으로 반환
        response_data = {'recommendation': 'Your recommendation here'}
        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'Only POST requests are supported'})
def index(request):
    html_content = """
    <html>
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FitDB에 오신 걸 환영합니다.</title>
</head>
<body>
  <h1>FitDB AI스케줄러</h1>
  <br>
  <form action="/gpt">
    <table class="myFitTable">
      <thead>
        <tr><th>AI스케줄러로 다음날 운동 부위를 추천받아보세요!</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><input id="fit" type="text" name="fit" placeholder="오늘 가슴운동 했어"></td>
        </tr>
      </tbody>
    </table>

    <input id="fitSubmit" type="submit" value="제출"/>
    <br>
  </form>
</body>
    </html>
    """
    return HttpResponse(html_content)

def gpt(request):
    global messages
    fit = request.GET.get("fit", "오늘 가슴운동 했어.")

    prompt = f"""
    당신은 헬스 전문가입니다. 오늘한 운동은 {fit}입니다.
    등,가슴,하체,어깨,팔 총 5가지가 있습니다.
    오늘 1가지를 하면 오늘 1가지를 제외한 다른 4가지 중 1가지를 추천해주시기 바랍니다.
    """
    messages.append({"role": "user", "content": prompt})
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  messages=messages)

    res = completion.choices[0].message['content'].replace(
        "\n", "<br/>").replace(" ", " &nbsp;")
    messages.append({"role": 'assistant', "content": res})
    print(res)

    context = {"res": res}
    return render(request, 'gpt.html', context)


# 이전에 정의한 messages 초기화
messages = [{"role": "system", "content": "당신은 헬스 전문가입니다. 어떤 운동을 하셨나요?"}]

@csrf_exempt
def gpt_endpoint(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            input_data = data.get('input')
            print("Received input data:", input_data)  # 이 부분을 추가
            
            # GPT-3.5 Turbo 모델을 사용하여 추천 생성
            prompt = f"""
            당신은 헬스 전문가입니다. 오늘한 운동은 {input_data}입니다.
            등, 가슴, 하체, 어깨, 팔 총 5가지가 있습니다.
            오늘 1가지를 하면 오늘 1가지를 제외한 다른 4가지 중 1가지를 다음날 운동으로 추천해주시기 바랍니다.
            """
            messages.append({"role": "user", "content": prompt})
            
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo", messages=messages)

            res = completion.choices[0].message['content']
            
            messages.append({"role": 'assistant', "content": res})

            # &nbsp;를 스페이스로 대체
            res = res.replace("&nbsp;", " ")
            return JsonResponse({'recommendation': res})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are supported'})