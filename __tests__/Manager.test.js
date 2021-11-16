const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Bob", "10");

    expect(manager.officeNumber).toBe("10");
})

test("checks that role has been changed to Manager", () => {
    const manager = new Manager("Bob", "10");

    expect(manager.getRole()).toBe("Manager");
})