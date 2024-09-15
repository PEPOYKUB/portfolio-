// Sample movie data (you can replace this with actual data)
const movies = [
    {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        rating: 9.3
    },
    {
        title: 'The Godfather',
        genre: 'Crime, Drama',
        rating: 9.2
    },
    {
        title: 'The Dark Knight',
        genre: 'Action, Crime, Drama',
        rating: 9.0
    },
    {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        rating: 9.3
    },
    {
        title: 'The Godfather',
        genre: 'Crime, Drama',
        rating: 9.2
    },
    {
        title: 'The Dark Knight',
        genre: 'Action, Crime, Drama',
        rating: 9.0
    },
    {
        title: 'Inception',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 8.8
    },
    {
        title: 'Interstellar',
        genre: 'Adventure, Drama, Sci-Fi',
        rating: 8.6
    },
    {
        title: 'Fight Club',
        genre: 'Drama',
        rating: 8.8
    },
    {
        title: 'Forrest Gump',
        genre: 'Drama, Romance',
        rating: 8.8
    },
    {
        title: 'The Matrix',
        genre: 'Action, Sci-Fi',
        rating: 8.7
    },
    {
        title: 'Pulp Fiction',
        genre: 'Crime, Drama',
        rating: 8.9
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        genre: 'Action, Adventure, Drama',
        rating: 8.9
    },
    {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        rating: 9.3
    },
    {
        title: 'The Godfather',
        genre: 'Crime, Drama',
        rating: 9.2
    },
    {
        title: 'The Dark Knight',
        genre: 'Action, Crime, Drama',
        rating: 9.0
    },
    {
        title: 'Inception',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 8.8
    },
    {
        title: 'Interstellar',
        genre: 'Adventure, Drama, Sci-Fi',
        rating: 8.6
    },
    {
        title: 'Fight Club',
        genre: 'Drama',
        rating: 8.8
    },
    {
        title: 'Forrest Gump',
        genre: 'Drama, Romance',
        rating: 8.8
    },
    {
        title: 'The Matrix',
        genre: 'Action, Sci-Fi',
        rating: 8.7
    },
    {
        title: 'Pulp Fiction',
        genre: 'Crime, Drama',
        rating: 8.9
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        genre: 'Action, Adventure, Drama',
        rating: 8.9
    },
    {
        title: 'The Godfather: Part II',
        genre: 'Crime, Drama',
        rating: 9.0
    },
    {
        title: 'The Silence of the Lambs',
        genre: 'Crime, Drama, Thriller',
        rating: 8.6
    },
    {
        title: 'The Usual Suspects',
        genre: 'Crime, Mystery, Thriller',
        rating: 8.5
    },
    {
        title: 'Se7en',
        genre: 'Crime, Drama, Mystery',
        rating: 8.6
    },
    {
        title: 'Goodfellas',
        genre: 'Biography, Crime, Drama',
        rating: 8.7
    },
    {
        title: 'The Green Mile',
        genre: 'Crime, Drama, Fantasy',
        rating: 8.6
    },
    {
        title: 'The Intouchables',
        genre: 'Biography, Comedy, Drama',
        rating: 8.5
    },
    {
        title: 'The Prestige',
        genre: 'Drama, Mystery, Sci-Fi',
        rating: 8.5
    },
    {
        title: 'Gladiator',
        genre: 'Action, Adventure, Drama',
        rating: 8.5
    },
    {
        title: 'The Departed',
        genre: 'Crime, Drama, Thriller',
        rating: 8.5
    },
];

const movieList = document.querySelector('.movie-list');

// Function to display movies
function displayMovies() {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
        `;
        movieList.appendChild(movieCard);
    });
}

// Initial display of movies
displayMovies();

// ฟังก์ชันในการค้นหาหนัง
function searchMovies() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.toLowerCase(); // แปลงคำค้นหาเป็นตัวพิมพ์เล็ก

    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm); // กรองหนังที่มีชื่อตรงกับคำค้นหา
    });

    // แสดงเฉพาะหนังที่ผ่านการกรอง
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
        `;
        movieList.appendChild(movieCard);
    });
}

// เพิ่มการเรียกใช้งานฟังก์ชัน searchMovies() เมื่อกดปุ่ม Search
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', searchMovies);

// ฟังก์ชันในการแสดงหน้าหลังจากค้นหา
function showSearchResults() {
    // ซ่อนหน้าค้นหา
    searchPage.style.display = 'none';
    // แสดงหน้าผลลัพธ์
    resultsPage.style.display = 'block';
}

// ฟังก์ชันในการแสดงหน้าค้นหา
function showSearchPage() {
    // ซ่อนหน้าผลลัพธ์
    resultsPage.style.display = 'none';
    // แสดงหน้าค้นหา
    searchPage.style.display = 'block';
}

// เพิ่มการเรียกใช้งานฟังก์ชัน showSearchPage() เมื่อกดปุ่ม Back
const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', showSearchPage);

const recommendedMovies = {
    popular: [
        'The Shawshank Redemption',
        'The Godfather',
        'The Dark Knight',
        'Inception',
        'Interstellar'
    ],
    horror: [
        'The Silence of the Lambs',
        'Se7en',
        'The Sixth Sense',
        'Psycho',
        'The Exorcist'
    ],
    action: [
        'The Matrix',
        'Mad Max: Fury Road',
        'Die Hard',
        'John Wick',
        'Avengers: Infinity War'
    ],
    crime: [
        'The Godfather',
        'Goodfellas',
        'Scarface',
        'Casino',
        'American Gangster'
    ],
    comedy: [
        'The Hangover',
        'Superbad',
        'Bridesmaids',
        'Anchorman',
        'Dumb and Dumber'
    ]
};

function displayRecommendedMovies() {
    const categories = Object.keys(recommendedMovies);

    categories.forEach(category => {
        const movies = recommendedMovies[category];
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = `
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ul>
                ${movies.map(movie => `<li>${movie}</li>`).join('')}
            </ul>
        `;
        document.body.appendChild(categoryElement);
    });
}

displayRecommendedMovies();
