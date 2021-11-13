function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
};

Employee.prototype.getName = function () {
    return `The employees name is ${this.name}`;
};

