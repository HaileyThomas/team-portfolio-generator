const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Matt");

    expect(employee.name).toBe("Matt");
});

