
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// definisco la variabille di collegamrnto all'html
const outputHtml = document.querySelector('.team-container');

for(let i = 1; i < team.length; i++) {
    outputHtml.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${team[i].image}" alt="${team[i].name}"/>
        </div>
        <div class="card-text">
            <h3>${team[i].name}</h3>
            <p>${team[i].role}</p>
        </div>
    </div>`;
}

// or
// for(let i = 1; i < team.length; i++){
    //     let teamCard = document.createElement('div');
    //     teamCard.className = 'team-card';
    //     let cardImg = document.createElement('div');
    //     cardImg.className = 'card-image';
    //     cardImg.innerHTML += `<img src="img/${team[i].image}" alt="${team[i].name}"/>`;
    //     let cardText = document.createElement('div')
    //     cardText.className = 'card-text';
    //     cardText.innerHTML += `<h3>${team[i].name}</h3>`;
    //     cardText.innerHTML += `<p>${team[i].role}</p>`;
    //     teamCard.append(cardImg, cardText);
    //     outputHtml.append(teamCard);
    // }
    
    // BONUS
    // definisco la variabile del bottone
    const addMemberButton = document.getElementById('addMemberButton');
    
    // definisco l'evento al click del bottone
    addMemberButton.addEventListener('click', () => {
        let newName = document.getElementById('name').value;
        let newRole = document.getElementById('role').value;
        let newImg = document.getElementById('image').value;
        const object = {
            name: newName,
            role: newRole,
            image: newImg,
        }
        team.push(object);
    })
    
    
    