var time = {
  date: new Date(),
  getHour: function () {
    return this.date.getHours();
  },
};

// Para acessar a hora atual usando o objeto 'time':
var time = {
  date: new Date(),
  getHour: function () {
    return this.date.getHours();
  },
};

// Para acessar a hora atual usando o objeto 'time':
var horaAtual = time.getHour();
console.log("A hora atual é: " + horaAtual);

// Lógica para mudar o background de acordo com a hora do dia
if (horaAtual >= 18 && horaAtual <= 24) {
  document.body.style.background = "noite";
} else {
  document.body.style.background = "dia";
}
// Path: css/css/time.js

// Path: css/css/time.js
var time = {
  date: new Date(),
  getHour: function () {
    return this.date.getHours();
  },
};

// Para acessar a hora atual usando o objeto 'time':
var horaAtual = time.getHour();
console.log("A hora atual é: " + horaAtual);
