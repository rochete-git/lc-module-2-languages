console.log("************** DELIVERABLE 04 *********************");
console.log("**************** Read Books *********************");

// Read books

interface book {
    title: string,
    isRead: boolean,
};

const books : book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead (books: book[], titleToSearch: string) : boolean {
    let result : boolean = false;
    books.forEach(book => (book.title === titleToSearch && book.isRead) ? result = true : "");
    return result;
}

console.log("Book: Devastación -> ", isBookRead(books, "Devastación")); // true
console.log("Book: Canción de hielo y fuego -> ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Book: Los Pilares de la Tierra -> ", isBookRead(books, "Los Pilares de la Tierra")); // false