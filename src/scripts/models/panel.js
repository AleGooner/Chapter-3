(function() {
  var Employee, Panel;

  Employee = window.GLOBALS.Employee;

  Panel = (function() {
    function Panel(panel, employees) {
      this.panel = panel;
      this.employees = employees;
      this.init();
    }

    Panel.prototype.init = function() {
      var _this;
      _this = this;
      this.render();
      return $("#btn-hire").click(function() {
        var key;
        key = $("#input-employee").val();
        _this.employees[key] = new Employee(key, 1, 40);
        return _this.render();
      });
    };

    Panel.prototype.getEmployees = function() {
      return this.employees;
    };

    Panel.prototype.setEmployees = function(employees) {
      return this.employees = employees;
    };

    Panel.prototype.render = function() {
      var key, row, value, _ref, _this;
      _this = this;
      this.panel.find("tbody").html(" ");
      _ref = this.employees;
      for (key in _ref) {
        value = _ref[key];
        if (value.isFired()) {
          continue;
        }
        row = "<tr data-id='" + key + "'> <td>" + key + "</td> <td>" + value.level + "</td> <td>" + value.hours + "</td> <td> <button class='btn btn-primary btn-promote' data-id='" + key + "'>Promote</button> <button class='btn btn-danger btn-fire' data-id='" + key + "'>Fire</button> </td> </tr>";
        this.panel.find("tbody:last").append(row);
      }
      this.panel.find(".btn-promote").each(function() {
        return $(this).click(function() {
          key = $(this).attr("data-id");
          _this.employees[key].promote();
          return _this.render();
        });
      });
      return this.panel.find(".btn-fire").each(function() {
        return $(this).click(function() {
          key = $(this).attr("data-id");
          _this.employees[key].fire();
          return _this.render();
        });
      });
    };

    return Panel;

  })();

  window.GLOBALS.Panel = Panel;

}).call(this);
