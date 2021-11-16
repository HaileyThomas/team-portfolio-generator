const Engineer = require("../lib/Engineer");

test("creates a new Engineer object", () => {
    const engineer = new Engineer("Max", "Hogwarts");

    expect(engineer.name).toBe("Max");
    expect(engineer.school).toBe("Hogwarts");
});

test("checks that getSchool function is working", () => {
    const engineer = new Engineer("Max", "Hogwarts");

    expect(engineer.getSchool()).toEqual(expect.stringContaining(engineer.school.toString()));
})

test("checks that role has been changed to Engineer", () => {
    const engineer = new Engineer("Max", "Hogwarts");

    expect(engineer.getRole()).toBe("Engineer");
})