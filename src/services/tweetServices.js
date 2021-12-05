export const getAllTweetsService = async (token) => {
  const url = "https://js-advanced-twitter.herokuapp.com/tweets";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const postTweetService = async (token, userId, newTweet) => {
  const url = "https://js-advanced-twitter.herokuapp.com/tweets";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newTweet.title,
      text: newTweet.text,
      userId: userId,
    }),
  });

  const data = await response.json();
  return data;
};
