

const deleteBook = async (id) => {
    try {
      const response = await axiosInstance.delete(`/book/${id}`)
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  }