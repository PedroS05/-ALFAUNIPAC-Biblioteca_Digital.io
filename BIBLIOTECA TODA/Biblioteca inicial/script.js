document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis e botões
    const carrosseis = document.querySelectorAll('.carrossel');
    const botoesAnterior = document.querySelectorAll('.anterior');
    const botoesProximo = document.querySelectorAll('.proximo');

    // Configuração dos carrosséis
    carrosseis.forEach((carrossel, index) => {
        const larguraItem = 180; // Largura aproximada de cada item do carrossel
        const scrollAmount = larguraItem * 3; // Quantidade de rolagem (3 itens)

        // Botão próximo
        botoesProximo[index].addEventListener('click', () => {
            carrossel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Botão anterior
        botoesAnterior[index].addEventListener('click', () => {
            carrossel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Desabilita/abilita botões conforme a posição do scroll
        carrossel.addEventListener('scroll', () => {
            const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
            
            botoesAnterior[index].style.visibility = carrossel.scrollLeft <= 0 ? 'hidden' : 'visible';
            botoesProximo[index].style.visibility = carrossel.scrollLeft >= maxScroll ? 'hidden' : 'visible';
        });

        // Inicializa os botões
        botoesAnterior[index].style.visibility = 'hidden';
        if (carrossel.scrollWidth <= carrossel.clientWidth) {
            botoesProximo[index].style.visibility = 'hidden';
        }
    });
});