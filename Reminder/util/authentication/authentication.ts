export const authenticate = async (email: string, password: string) => {};

export const createUser = (email: string, password: string) => {
  return authenticate(email, password);
};
