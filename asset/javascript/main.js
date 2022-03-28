//Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
let ourTeam=[
    {
        'nomi':'Wayne Barnett',
        'ruoli':'Fonder & CEO',
        'immagine':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nomi':'Angela Caroll',
        'ruoli':'Chief Editor',
        'immagine':'angela-caroll-chief-editor.jpg'
    },
    {
        'nomi':'Walter Gordon',
        'ruoli':'Office Manager',
        'immagine':'walter-gordon-office-manager.jpg'
    },
    {
        'nomi':'Angela Lopez',
        'ruoli':'Social Media Manager',
        'immagine':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nomi':'Scott Estrada',
        'ruoli':'Developer',
        'immagine':'scott-estrada-developer.jpg'
    },
    {
        'nomi':'Barbara Ramos',
        'ruoli':'Graphic Designer',
        'immagine':'barbara-ramos-graphic-designer.jpg'
    }
]
//Milestone 2: stampare i dati all'interno di un contenitore
// nella pagina html in modo dinamico,
// creando per ciascun membro del team un elemento che conterrà i suoi dati.

for(let i=0; i<ourTeam.length; i++){
    for(let key in ourTeam[i]){
        console.log(`${key}->${ourTeam[i][key]} `)
    }
}

 for(let i=0; i<ourTeam.length; i++){
    
    for(let key in ourTeam[i]){
        console.log(ourTeam[i][key])
        console.log[key] 
    }   
    document.getElementById("containerDati").innerHTML+=`
        <div class="container containerCards>
            <div class="cardS" style="width: 18rem;">
                <img src=./asset/img//${ourTeam[i]['immagine']} class="card-img-top w_castom">
                <div class="card-body text-center">
                    <h5 class="card-title">${ourTeam[i]['nomi']}</h5>
                    <p class="card-text">${ourTeam[i]['ruoli']}</p>
                </div>
            </div>
        </div>
      `      
}













