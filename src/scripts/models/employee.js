(function() {
  var Employee, Person,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Person = window.GLOBALS.Person;

  Employee = (function(_super) {
    __extends(Employee, _super);

    function Employee(name, level, hours) {
      this.name = name;
      this.level = level;
      this.hours = hours;
      Employee.__super__.constructor.call(this, this.name);
      if (this.level < 1) {
        throw "Invalid Employee Level";
      }
      if (this.hours < 0) {
        throw "Invalid Allocated Hours";
      }
    }

    Employee.prototype.getLevel = function() {
      return this.level;
    };

    Employee.prototype.getHours = function() {
      return this.hours;
    };

    Employee.prototype.isFired = function() {
      return this.level === 0;
    };

    Employee.prototype.promote = function() {
      this.level++;
      return this.hours += 4;
    };

    Employee.prototype.fire = function() {
      this.level = 0;
      return this.hours = 0;
    };

    return Employee;

  })(Person);

  window.GLOBALS.Employee = Employee;

}).call(this);
