const Intern=require('../lib/Intern');

test ('creates an intern card', ()=> {
    const intern = new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.school).toBe(expect.any(string));
}); 

test('gets intern school',()=>{
    const intern = new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.getSchool()).toBe(expect.stringContaining(intern.school.toString()));
})

test('gets role of the intern',()=>{
    const intern=new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.getRole()).toBe("Intern")
});