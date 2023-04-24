const Employee = require('../lib/employee');

test('creates new employee', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getName()).toStrictEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getId()).toStrictEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getEmail()).toStrictEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getRole()).toBe("Employee");
}); 