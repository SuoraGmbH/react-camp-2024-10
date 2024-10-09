// A wrapper around fetch, which handles authentication for us.
// It could make sense to forbid usage of the normal fetch using eslint.
const ourFetch = (
  input: Parameters<typeof fetch>[0],
  init?: Parameters<typeof fetch>[1],
) => {
  if (init) {
    if (init.headers) {
      // @ts-expect-error I just want to show how this is done theoretically, even thoug this example might cause issues.
      init.headers["Authorization"] = "foo";
    } else {
      if (init.body) {
        // Add a signature of the body to a header
      }
      init.headers = { Authorization: "foo" };
    }
  }

  return fetch(input, init);
};

export default ourFetch;
