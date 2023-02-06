const manager = require('../lib/manager');

test ('creates manager card', () => {
    const manager = new manager ('Jason', 20, 'Jason.yung@gmail.com', '2');
    expect (manager.officeNumber).toBe(expect.any(Number));

});

test('gets role of manager',()=>{
    const manager = new manager ('Jason', 20, 'Jason.yung@gmail.com', '2');
    expect ( manager.getRole()).toBe("Manager");
});