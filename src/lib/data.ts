const SO_API_URL = "https://api.stackexchange.com/2.3";

export const getAllTags = async (query: string) => {
  // console.log(query);
  try {
    const response = await fetch(
      `${SO_API_URL}/tags?site=stackoverflow&filter=!nNPvSNVZJS&${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const tagsRes = await response.json();
    return tagsRes;
  } catch (error) {
    console.log(error);
    return {
      error: "There is some problem with server. Sorry!",
    };
  }
};
