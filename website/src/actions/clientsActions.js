import axios from "axios";

export const getClients = async () => {
  const query = `
    query {
  clientsCollection {
    items {
      client
      logo {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}`;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_CONTENTFUL_URL}`,
      { query: query }
    );
    return response.data.data.clientsCollection.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
