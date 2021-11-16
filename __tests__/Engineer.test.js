const Engineer = require("../lib/Engineer");

test("creates a new Engineer object", () => {
    const engineer = new Engineer("Diana", "02", "diana@email.com", "DianaGit");

    expect(engineer.name).toBe("Diana");
    expect(engineer.id).toBe("02");
    expect(engineer.email).toBe("diana@email.com");
    expect(engineer.github).toBe("DianaGit");
});

test("checks that getGithub function is working", () => {
    const engineer = new Engineer("Diana", "02", "diana@email.com", "DianaGit");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("checks that role has been changed to Engineer", () => {
    const engineer = new Engineer("Diana", "02", "diana@email.com", "DianaGit");

    expect(engineer.getRole()).toBe("Engineer");
})