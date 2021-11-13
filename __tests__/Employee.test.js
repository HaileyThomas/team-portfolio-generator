const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Matt");

    expect(employee.name).toBe("Matt");
});

