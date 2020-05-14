export function saveCalls(func) {
    // const calls = [];

    function withMemory(...arguments) {
      withMemory.calls.push(arguments);
      return func.apply(this, arguments);
    };

    withMemory.calls = [];
    return withMemory;
  };