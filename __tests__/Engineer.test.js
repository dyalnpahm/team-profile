const Engineer = require('../lib/Engineer');

test ('creates engineer card', () => {
    const engineer = new Engineer('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect (engineer.github).toStrictEqual(expect.any(String));
});

test('gets the engineers github', () =>{
    const engineer = new Engineer ('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect (engineer.getGithub()).toStrictEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets the role of the engineer', ()=>{
    const engineer= new Engineer ('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect(engineer.getRole()).toBe('Engineer');
});