/**
 * Get the overridable configuration.
 * @returns {Object}
 */
function overridable() {
  return {
    functions: [],

    /**
     * Add a function with different parameters.
     * @param {Function} fn
     * @returns {Object}
     */
    add: function(fn) {
      if (typeof fn !== 'function') { return false; }

      const functionLength = fn.length;
      this.functions[functionLength] = fn;

      return {
        functions: this.functions,
        add: this.add,
        result: this.result,
      };
    },

    /**
     * Get the result function when you finish adding the functions.
     * @returns {Function}
     */
    result: function() {
      const _this = this;
      const functions = this.functions;

      return function() {
        const functionLength = arguments.length;

        if (functions[functionLength]) {
          return functions[functionLength].call(_this, ...arguments);
        } else {
          throw new Error('There is no function match ' + functionLength + ' arguments.');
        }
      };
    },
  };
};

module.exports = overridable;
