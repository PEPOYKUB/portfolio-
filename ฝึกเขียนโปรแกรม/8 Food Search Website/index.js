const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const results = document.getElementById('results');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = input.value.trim();
    if (query !== '') {
        search(query);
    }
});

function search(query) {
    // สร้าง URL สำหรับค้นหาอาหารโดยใช้ API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    // ส่ง request ไปยัง API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(data) {
    results.innerHTML = '';

    if (data.meals === null) {
        results.innerHTML = 'No results found.';
        return;
    }

    data.meals.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h2>${item.strMeal}</h2>
            <p>${item.strInstructions}</p>
            <img src="${item.strMealThumb}" alt="${item.strMeal}" >
        `;
        results.appendChild(foodItem);
    });
}

function displayResults(data) {
    results.innerHTML = '';

    if (data.meals === null) {
        results.innerHTML = 'No results found.';
        return;
    }

    data.meals.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h2>${item.strMeal}</h2>
            <p>${item.strInstructions}</p>
            <img src="${item.strMealThumb}" alt="${item.strMeal}">
        `;
        results.appendChild(foodItem);
    });

    // เพิ่มปุ่ม "Back to Top"
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.classList.add('back-to-top');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(backToTopButton);
}

// เพิ่มสไตล์ CSS สำหรับปุ่ม "Back to Top"
const style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
        z-index: 9999;
        display: none;
    }

    .back-to-top:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(style);

// เมื่อ scroll หน้าจอ แสดงหรือซ่อนปุ่ม "Back to Top"
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const backToTopButton = document.querySelector('.back-to-top');
    if (scrollPosition > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
