(function() {
  var Employee, Panel;

  Employee = window.GLOBALS.Employee;

  Panel = window.GLOBALS.Panel;

  $(function() {
    var collection, employees, model, panel, _i, _len;
    collection = [
      {
        name: "John",
        level: 4,
        hours: 40
      }, {
        name: "Jane",
        level: 4,
        hours: 40
      }, {
        name: "Max",
        level: 4,
        hours: 40
      }
    ];
    employees = {};
    for (_i = 0, _len = collection.length; _i < _len; _i++) {
      model = collection[_i];
      employees[model.name] = new Employee(model.name, model.level, model.hours);
    }
    return panel = new Panel($("#table-employee"), employees);
  });

}).call(this);
