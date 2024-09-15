const books = [
    {
        title: 'KAIJYU No.8 เล่ม 01',
        author: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolores.',
        image: 'https://cdn-local.mebmarket.com/meb/server1/151585/Thumbnail/book_detail_large.gif?2',
        link: 'book1.pdf'
    },
    {
        title: 'คนโหดครั่งรัก',
        author: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolores.',
        image: 'https://cdn-local.mebmarket.com/meb/server1/295200/Thumbnail/book_detail_large.gif?2',
        link: 'book2.pdf'
    },

];


const bookList = document.getElementById('book-list');

books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>by ${book.author}</p>
        <a href="${book.link}" target="_blank">Read Now</a>
    `;
    bookList.appendChild(bookElement);
});
