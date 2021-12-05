const getAccessToken = async (email) => {
  const url = "https://js-advanced-twitter.herokuapp.com/login";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password: "secure",
    }),
  });

  const data = await response.json();
  return data;
};

export default getAccessToken;
