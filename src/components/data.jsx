import axios from "axios";

let data = [];

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=10&apikey=a9c273c9a3850d41ec388598454404f3"
    );
    const articles = response.data.articles;

    articles.slice(0, 25).forEach((article) => {
      const feedback = {
        name: article.title,
        desc: article.description,
        content: article.content,
        url: article.url,
        image: article.image,
        publishedAt: article.publishedAt,
      };

      data.push(feedback);
    });

    return data; // Return the populated data array
  } catch (error) {
    console.log(error);
  }
};

export const fetchAndExportData = async () => {
  data = await fetchData(); // Populate the data array

  return data; // Return the populated data array
};
