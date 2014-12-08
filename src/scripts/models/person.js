(function() {
  var Person;

  Person = (function() {
    function Person(name) {
      this.name = name;
      if (this.name.length === 0) {
        throw "Invalid name";
      }
    }

    Person.prototype.getName = function() {
      return this.name;
    };

    return Person;

  })();

  window.GLOBALS.Person = Person;

}).call(this);
