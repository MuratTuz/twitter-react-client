export const saveTokenToSessionStorage = (token, username, userId) => {
  sessionStorage.setItem("myTwitterToken", token);
  sessionStorage.setItem("myTwitterUsername", username);
  sessionStorage.setItem("myTwitterUserId", userId);
};

export const getTokenFromSessionStorage = () => {
  return {
    token: sessionStorage.getItem("myTwitterToken"),
    username: sessionStorage.getItem("myTwitterUsername"),
    userId: sessionStorage.getItem("myTwitterUserId"),
  };
};
