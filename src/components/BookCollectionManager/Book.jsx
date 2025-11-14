const Book = ({ book, index, onDelete, onUpdate, onMoveUp, onMoveDown }) => {
    return (
        <li>
            <strong>{book.title} by {book.author} </strong><br />
            Genre: {book.genre} Language: {book.language} Pages: {book.pages} <br />
            Edition: {book.edition} Rating: {book.rating}/5
            <button onClick={() => onDelete(index)}>Delete</button>
            <button className="update-button" onClick={() => onUpdate(index)}>Update</button>
            <button className="move-button" onClick={() => onMoveUp(index)}>👆</button>
            <button className="move-button" onClick={() => onMoveUp(index)}>👇</button>
        </li>
    );
};
export default Book;