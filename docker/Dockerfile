FROM python:2.7-slim

WORKDIR /docker_app
ADD build /docker_app/build
ADD flask_react.py /docker_app/
ADD requirements.txt /docker_app/

RUN pip install -r requirements.txt

EXPOSE 80

ENV NAME flask-react

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:80", "flask_react:app"]
