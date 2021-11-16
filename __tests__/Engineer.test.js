const Engineer = require("../lib/Engineer");

test("creates a new Engineer object", () => {
    const engineer = new Engineer("Diana", "DianaGit");

    expect(engineer.name).toBe("Diana");
    expect(engineer.github).toBe("DianaGit");
});

test("checks that getGithub function is working", () => {
    const engineer = new Engineer("Diana", "DianaGit");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test("checks that role has been changed to Engineer", () => {
    const engineer = new Engineer("Diana", "DianaGit");

    expect(engineer.getRole()).toBe("Engineer");
})