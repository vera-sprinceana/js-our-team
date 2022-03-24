//Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
let ourTeam=[
    {
        'nomi':'Wayne Barnett',
        'ruoli':'Fonder & CEO',
        'img':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nomi':'Angela Caroll',
        'ruoli':'Chief Editor',
        'img':'angela-caroll-chief-editor.jpg'
    },
    {
        'nomi':'Walter Gordon',
        'ruoli':'Office Manager',
        'img':'walter-gordon-office-manager.jpg'
    },
    {
        'nomi':'Angela Lopez',
        'ruoli':'Social Media Manager',
        'img':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nomi':'Scott Estrada',
        'ruoli':'Developer',
        'img':'scott-estrada-developer.jpg'
    },
    {
        'nomi':'Barbara Ramos',
        'ruoli':'Graphic Designer',
        'img':'barbara-ramos-graphic-designer.jpg'
    }
]
//Milestone 2: stampare i dati all'interno di un contenitore
// nella pagina html in modo dinamico,
// creando per ciascun membro del team un elemento che conterrà i suoi dati.
for(let i=0; i<ourTeam.length; i++){
    console.log(ourTeam[i])
     document.getElementById("containerDati").innerHTML+=`<div class="card"><h3>${ourTeam[i]['nomi']}</h3>   <p>${ourTeam[i]['ruoli']}</p> <p> ${ourTeam[i]['img']}</p></div>`;
}














    // {
    //     'nomi':'Barbara Ramos',
    //     'ruoli':'Social Media Manager',
    //     'img':'new-team-member-01.jpg'
    // },
    // {
    //     'nomi':'Barbara Ramos',
    //     'ruoli':'Graphic Designer',
    //     'img':'new-team-member-02.jpg'
    // },
    // {
    //     'nomi':'Barbara Ramos',
    //     'ruoli':'Graphic Designer',
    //     'img':'new-team-member-03.jpg'
    // },
    // {
    //     'nomi':'Barbara Ramos',
    //     'ruoli':'Graphic Designer',
    //     'img':'new-team-member-04.jpg'
    // }