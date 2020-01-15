const makeKeySupport = keys => event => {
  const method = keys[event.key];
  if (method) {
    method();
  }
};

let keySupport = makeKeySupport({});

export const setKeymap = keys => {
  document.removeEventListener("keydown", keySupport);
  keySupport = makeKeySupport(keys);
  document.addEventListener("keydown", keySupport);
};
