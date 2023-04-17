const Employee = require('../lib/employee');

test('creates new employee', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getName()).toBe(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getId()).toBe(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getEmail()).toBe(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Jason', 20, 'Jason.yung@gmail.com');

    expect(employee.getRole()).toBe("Employee");
}); 