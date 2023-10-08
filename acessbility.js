
// Função para aumentar a fonte.

function aumentarTamanho() {
   
    const elementoTexto = document.querySelectorAll('*:not(script):not(style):not(link):not(meta):not(title):not(button):not([type="button"])');
    
    elementoTexto.forEach(parametro => {
        
        const estilo = window.getComputedStyle(parametro);
        
        const tamanhoAtual = parseFloat(estilo.fontSize);
        
        const novoTamanho = tamanhoAtual * 1.1; // + 10%
        
        parametro.style.fontSize = novoTamanho + 'px';

    });
}

// Função para diminuir a fonte.
function diminuirTamanho() {

    const elementoTexto = document.querySelectorAll('*:not(script):not(style):not(link):not(meta):not(title):not(button):not([type="button"])');
    
    elementoTexto.forEach(parametro => {
        
        const estilo = window.getComputedStyle(parametro);
        
        const tamanhoAtual = parseFloat(estilo.fontSize);
        
        const novoTamanho = tamanhoAtual / 1.1; // - 10%
       
        parametro.style.fontSize = novoTamanho + 'px';

    });
}

// Botões linkados
document.getElementById('increase-font').addEventListener('click', aumentarTamanho);

document.getElementById('decrease-font').addEventListener('click', diminuirTamanho);



