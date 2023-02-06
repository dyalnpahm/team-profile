const Employee=require('./Employee');
class engineer extends engineer{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }
    getGithub (){
        return this.github;

    }
    getRole (){
        return "engineer";

    }
}

module.exports = Engineer;
