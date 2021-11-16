const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Bob", "03", "bob@email.com", "10");

    expect(manager.name).toBe("Bob");
    expect(manager.id).toBe("03");
    expect(manager.email).toBe("bob@email.com");
    expect(manager.officeNumber).toBe("10");
})

test("checks that role has been changed to Manager", () => {
    const manager = new Manager("Bob", "03", "bob@email.com", "10");

    expect(manager.getRole()).toBe("Manager");
})