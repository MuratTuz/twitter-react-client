export const saveTokenToSessionStorage = (token) => {
  sessionStorage.setItem("myTwitterToken", token);
};

export const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("myTwitterToken");
};
