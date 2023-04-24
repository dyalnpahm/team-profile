const Intern=require('../lib/Intern');

test ('creates an intern card', ()=> {
    const intern = new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.school).toStrictEqual(expect.any(String));
}); 

test('gets intern school',()=>{
    const intern = new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.getSchool()).toStrictEqual(expect.stringContaining(intern.school.toString()));
})

test('gets role of the intern',()=>{
    const intern=new Intern ('Jason', 20, 'Jason.yung@gmail.com', 'unsw');
    expect(intern.getRole()).toBe("Intern")
});