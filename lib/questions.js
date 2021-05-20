const {prompt} = require('inquirer');
const MANAGER = 'MANAGER';
const ENGINEER = 'ENGINEER';
const INTERN = 'INTERN';


prompt([
    {
        name: 'userType',
        type: 'list',
        message: 'who do you want to create',
        choices: [
        {name: 'MANAGER', value: MANAGER},
        {name: 'ENGINEER', value: ENGINEER},
        {name: 'INTERN', value: INTERN}
        ],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the ID of the employee'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of the employee'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the office number',
        when: (answers) => answers.userType === 'MANAGER'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the github account',
        when: (answers => answers.userType === 'ENGINEER')
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the school the intern went to',
        when: (answers => answers.userType === 'INTERN')
    }
])



const init = () =>
prompt().then((answers) => {
    console.log(answers)
    if (answers.userType === MANAGER) {
        const manager = new MANAGER(name = answer.name, id = answer.id, email = answer.email, officeNumber = officeNumber);
    }
    console.log(answers.userType)
})