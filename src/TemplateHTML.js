const generateManager = function (manager) {
      return `
          <div class="card manager-card">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="bi bi-command mr-3"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    }
  
    
    const generateEngineer = (engineer) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="bi bi-cpu mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    };
  
    const generateIntern = (intern) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    };
  
    generateHTML = (data) => {
        pageArray = []; 
    
        for (let i = 0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole(); 
    
            if (role === 'Manager') {
                const managerCard = generateManager(employee);
    
                pageArray.push(managerCard);
            }
            if (role === 'Engineer') {
                const engineerCard = generateEngineer(employee);
    
                pageArray.push(engineerCard);
            }

            if (role === 'Intern') {
                const internCard = generateIntern(employee);
    
                pageArray.push(internCard);
            }
            
        }
     
        const employeeCards = pageArray.join('')
    
        const generateTeam = generateTeamPage(employeeCards); 
        return generateTeam;
    
    }
    const generateTeamPage = function (employeeCards) {   
      return`

    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 ">
                <h1 class="text-center bg-danger text-light">My Team</h1>
                </h1>
            </div>
            </div>
        </div>
        <div class="container">
        <div class="row justify-content-center" id="team">
        ${employeeCards}
              </div>
          </div>
      </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </html>
  `;
}

module.exports = generateHTML;
