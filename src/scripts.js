// Obtém a referência do canvas e do contexto 2D
var tela = document.getElementById('meuCanvas');
var pincel = tela.getContext('2d');

// Desenha a cabeça
pincel.fillStyle = 'darkgreen';
pincel.fillRect(200, 50, 350, 300);

// Desenha os olhos
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);

// Desenha o nariz
pincel.fillRect(340, 200, 70, 100);

// Desenha a boca ou barba
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);
