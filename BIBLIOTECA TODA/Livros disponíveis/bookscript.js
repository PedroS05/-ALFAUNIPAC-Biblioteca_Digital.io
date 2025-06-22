document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const bookContainer = document.getElementById('book-container');
    const bookItems = document.querySelectorAll('.book-item');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');
    const navLinks = document.querySelectorAll('.nav-link');

    // Dados completos dos livros (para a página de sinopse)

// Dados completos dos livros
const booksData = {
    1: {
        title: "Homens são de Marte, Mulheres são de Vênus",
        author: "John Gray",
        category: "Relacionamentos",
        cover: "https://m.media-amazon.com/images/I/41ZR1G+8sIL._SY344_BO1,204,203,200_.jpg",
        synopsis: "Este clássico explora as diferenças fundamentais entre homens e mulheres, oferecendo insights valiosos para melhorar a comunicação e os relacionamentos. Gray apresenta conceitos simples mas poderosos sobre como homens e mulheres reagem diferentemente ao estresse e se comunicam de formas distintas. O livro se tornou uma referência para entender os relacionamentos amorosos e como superar as barreiras naturais entre os sexos.",
        publisher: "Ediouro",
        publishDate: "01/01/1992",
        releaseDate: "15/05/1993",
        pages: 286,
        readingTime: "6-8 horas",
        amazonLink: "https://www.amazon.com.br/Homens-s%C3%A3o-Marte-Mulheres-V%C3%AAnus/dp/8500015941"
    },
    // ... outros livros
};

// Armazenar dados no localStorage para uso na página de sinopse
localStorage.setItem('booksData', JSON.stringify(booksData));
    // Filtro de busca
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        bookItems.forEach(book => {
            const title = book.dataset.title.toLowerCase();
            const author = book.dataset.author.toLowerCase();
            const category = book.dataset.category;
            
            const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    }

    // Ativar link de navegação atual
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Event Listeners
    searchBtn.addEventListener('click', filterBooks);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') filterBooks();
    });
    categoryFilter.addEventListener('change', filterBooks);

    // Inicialização
    setActiveNavLink();

    // Armazenar dados dos livros no localStorage para uso na página de sinopse
    localStorage.setItem('booksData', JSON.stringify(booksData));
});