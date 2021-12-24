export const saveTokenToSessionStorage = (token) =>
  sessionStorage.setItem("myTwitterToken", token);

export const getTokenFromSessionStorage = () =>
  sessionStorage.getItem("myTwitterToken");
