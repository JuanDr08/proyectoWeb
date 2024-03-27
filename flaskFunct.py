from flask import Flask, render_template
import requests

app = Flask(__name__)

peticion = requests.get("https://660347162393662c31cecf3e.mockapi.io/api/v1/Products").json()

@app.route("/")
def index():
    return render_template('index.html', peticion=peticion)

@app.route("/views/abrigos")
def abrigos():
    return render_template('abrigos.html', peticion=peticion)

@app.route("/views/camisetas")
def tshirts():
    return render_template('camisetas.html', peticion=peticion)

@app.route("/views/pantalones")
def pants():
    return render_template('pantalones.html', peticion=peticion)

@app.route("/cart")
def cart():
    return render_template('carritos.html', peticion=peticion)

@app.route("/emptcart")
def emptcart():
    return render_template('carritoVacio.html')

app.run(debug=True)