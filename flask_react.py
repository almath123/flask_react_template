from flask import Flask, request, url_for, send_from_directory
from flask.json import jsonify

app = Flask(__name__, static_url_path='', static_folder="build/")

@app.route('/index.html')
def send_index():
    return app.send_static_file('index.html')

@app.route('/query/')
def answer_query():
    print "Got here"
    return jsonify([{'text':" Yay hello world"}])

@app.route('/rev/', methods=['GET', 'POST'])
def rev_string():
    if 'text' in request.values:
        return jsonify({'text':request.values['text'][::-1]})

if __name__ == "__main__":
    app.run()
