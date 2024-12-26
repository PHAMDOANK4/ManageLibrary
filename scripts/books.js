document.addEventListener('DOMContentLoaded', () => {
    const booksData = {
        community: [
            { 
                title: 'The Adventure Chronicles', 
                author: 'John Carter', 
                description: 'A thrilling tale of a young adventurer exploring uncharted lands.' 
            },
            { 
                title: 'Mystery of the Old Mansion', 
                author: 'Agatha Lee', 
                description: 'An intriguing mystery set in an ancient, abandoned mansion.' 
            },
            { 
                title: 'The Art of Happiness', 
                author: 'Dr. Emily Grace', 
                description: 'A guide to finding joy and contentment in everyday life.' 
            },
            { 
                title: 'Space Explorers', 
                author: 'Michael Star', 
                description: 'An epic journey through the cosmos with a team of astronauts.' 
            },
            { 
                title: 'Culinary Secrets', 
                author: 'Chef Marcus', 
                description: 'Discover the hidden techniques of world-class chefs.' 
            },
            { 
                title: 'The Silent Witness', 
                author: 'Sophia Harris', 
                description: 'A suspenseful crime novel about a witness who knows too much.' 
            },
            { 
                title: 'History Revisited', 
                author: 'Professor Andrew Blake', 
                description: 'An insightful look into the events that shaped our modern world.' 
            },
            { 
                title: 'Gardening for Beginners', 
                author: 'Linda Green', 
                description: 'A step-by-step guide to creating your dream garden.' 
            },
            { 
                title: 'The Digital Future', 
                author: 'Alan Bright', 
                description: 'Exploring the advancements of technology and their impact on society.' 
            },
            { 
                title: 'Fantasy Realms', 
                author: 'Eleanor Woods', 
                description: 'A captivating fantasy adventure filled with magic and mystery.' 
            }
        ],
        popular: [
            { 
                title: 'Beneath the Ocean', 
                author: 'Sarah Lynn', 
                description: 'Dive into the mysteries of the deep sea and its hidden secrets.' 
            },
            { 
                title: 'The Time Traveler', 
                author: 'H.G. Matthews', 
                description: 'A gripping science fiction novel about bending time and space.' 
            },
            { 
                title: 'The Music Within', 
                author: 'James Melody', 
                description: 'A heartfelt story about a musician’s journey to find his sound.' 
            },
            { 
                title: 'Life’s Lessons', 
                author: 'Olivia Harper', 
                description: 'A collection of inspiring stories and valuable life lessons.' 
            }
        ],
        recentAdd: [
            { 
                title: 'Rising Stars', 
                author: 'Daniel Clarke', 
                description: 'An in-depth look at the lives of today’s most influential figures.' 
            },
            { 
                title: 'The Final Puzzle', 
                author: 'Nina Cross', 
                description: 'A detective’s race against time to solve a mind-bending case.' 
            }
        ]
    };

    function createBookElement(book) {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const description = document.createElement('p');
        description.textContent = book.description;
        bookDiv.appendChild(description);

        return bookDiv;
    }

    function populateColumn(columnId, books) {
        const column = document.querySelector(`.column.${columnId}`);
        books.forEach(book => {
            const bookElement = createBookElement(book);
            column.appendChild(bookElement);
        });
    }

    populateColumn('community', booksData.community);
    populateColumn('popular', booksData.popular);
    populateColumn('recentAdd', booksData.recentAdd);

    function searchBooks(query) {
        const allBooks = [...booksData.community, ...booksData.popular, ...booksData.recentAdd];
        return allBooks.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    }

    document.querySelector('.search-container button').addEventListener('click', () => {
        const query = document.querySelector('.search-container input[type=text]').value;
        const results = searchBooks(query);
        const resultContainer = document.querySelector('.search-results');
        resultContainer.innerHTML = '';

        if (results.length > 0) {
            results.forEach(book => {
                const bookElement = createBookElement(book);
                resultContainer.appendChild(bookElement);
            });
        } else {
            resultContainer.innerHTML = '<p>No books found in the library.</p>';
        }
    });
});
