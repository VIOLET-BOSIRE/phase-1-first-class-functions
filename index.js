function receivesAFunction(callback) {
    callback();
  }
  callbackFunction();

  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("returned named function");
    };
  }
    
    function returnsAnAnonymousFunction() {
      return function() {
        console.log("returned anonymous function");
      };
    }