const Manager = require('../lib/manager');

test ('creates manager card', () => {
    const manager = new Manager ('Jason', 20, 'Jason.yung@gmail.com', 2);
    expect (manager.officeNumber).toStrictEqual(expect.any(Number));

});

test('gets role of manager',()=>{
    const manager = new Manager ('Jason', 20, 'Jason.yung@gmail.com');
    expect ( manager.getRole()).toStrictEqual("Manager");
});