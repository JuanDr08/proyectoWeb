from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/abrigos")
def abrigos():
    return render_template('abrigos.html')

app.run(debug=True)