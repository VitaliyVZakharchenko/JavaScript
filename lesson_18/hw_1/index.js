export function saveCalls(func) {
    const calls = [];

    function withMemory(...arguments) {
      calls.push(arguments);
      return func.apply(this, arguments);
    };

    withMemory.calls = calls;
    return withMemory;
  };