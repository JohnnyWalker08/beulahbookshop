// Mock data with links for demonstration
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", link: "gatsby.html" },
    { title: "1984", author: "George Orwell", link: "1984.html" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", link: "mockingbird.html" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", link: "catcher.html" },
    { title: "Moby Dick", author: "Herman Melville", link: "mobydick.html" }
  ];
  
  function searchBooks() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const results = books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query)
    );
  
    displayResults(results);
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = "";
  
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No results found</p>";
      return;
    }
  
    results.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `<p>
        <strong>${book.title}</strong> by ${book.author} 
        <a href="${book.link}" target="_blank">View Details</a>
      </p>`;
      resultsContainer.appendChild(bookElement);
    });
  }
  