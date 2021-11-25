export const useActionMock = value => {
  const mock = () => value;
  return mock;
};
