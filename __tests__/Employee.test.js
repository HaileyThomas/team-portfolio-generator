const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Wendy", "01", "wendy@email.com");

    expect(employee.name).toBe("Wendy");
    expect(employee.id).toBe("01");
    expect(employee.email).toBe("wendy@email.com");
});

test("gets role", () => {
    const employee = new Employee("Wendy", "01", "wendy@email.com");

    expect(employee.getRole()).toBe("Employee");
});