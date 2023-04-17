const Engineer = require('..lib/Engineer');

test ('creates engineer card', () => {
    const engineer = new Engineer('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect (engineer.github).toBe(expect.any(string));
});

test('gets the engineers github', () =>{
    const engineer = new Engineer ('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect (engineer.getGithub()).toBe(expect.stringContaining(engineer.github.toString()));
});

test('gets the role of the engineer', ()=>{
    const engineer= new Engineer ('Jason', 20, 'Jason.yung@gmail.com', 'jasonyung03');

    expect(engineer.getRole()).toBe('Engineer');
});