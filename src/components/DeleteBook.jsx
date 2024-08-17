import axios from "axios";


  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://final338-backend.onrender.com/api/v1/book${id}`);
      console.log("Book deleted");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  
  export default deleteBook;
  
