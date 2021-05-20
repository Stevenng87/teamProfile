const card = (name,id,role,email,github) => {
    cardHtml = `<div class="card>
    <div class="name">
        <h2>${name}</h2>
    </div>
    <p class='id'>
        ID: ${id}
    </p>
    <p class='role'>
        Role: ${role}
    </p>
    <p class='email'>
        Email: ${email}
    </p>
    <p class='github'>
        Github: ${github}
    </p>
    </div>`;
}

const studentCard = (name,id,role,email,school) => {
    cardHtml = `<div class="card>
    <div class="name">
        <h2>${name}</h2>
    </div>
    <p class='id'>
        ID: ${id}
    </p>
    <p class='role'>
        ${role}
    </p>
    <p class='email'>
        ${email}
    </p>
    <p class='school'>
        ${school}
    </p>
    </div>`;
}