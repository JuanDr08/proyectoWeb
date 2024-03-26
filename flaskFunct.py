from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/views/abrigos")
def abrigos():
    return render_template('abrigos.html')

@app.route("/views/camisetas")
def tshirts():
    return render_template('camisetas.html')

@app.route("/views/pantalones")
def pants():
    return render_template('pantalones.html')

@app.route("/cart")
def cart():
    return render_template('carritos.html')

@app.route("/emptcart")
def emptcart():
    return render_template('carritoVacio.html')
app.run(debug=True)