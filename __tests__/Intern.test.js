const Intern = require("../lib/Intern");

test("creates a new Intern object", () => {
    const intern = new Intern("Max", "04", "max@email.com", "Hogwarts");

    expect(intern.name).toBe("Max");
    expect(intern.id).toBe("04");
    expect(intern.email).toBe("max@email.com");
    expect(intern.school).toBe("Hogwarts");
});

test("checks that getSchool function is working", () => {
    const intern = new Intern("Max", "04", "max@email.com", "Hogwarts");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test("checks that role has been changed to Intern", () => {
    const intern = new Intern("Max", "04", "max@email.com", "Hogwarts");

    expect(intern.getRole()).toBe("Intern");
})