const Employee = require('.employee');

class intern extends employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school =school 

    }
    getRole(){
        return 'Intern'

    }
    get school(){
        return this.school

    }
}

module.export = Intern;
