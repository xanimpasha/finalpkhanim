const tbody = document.querySelector('tbody');
const currentUser = localStorage.getItem('currentUser');
const users = JSON.parse(localStorage.getItem('users'));
const saveBtn = document.querySelector('#saveBtn')
const table = document.querySelector('table')

let myComputers = users.find((users) => users.name === currentUser).computers;
let change = false
let id

function updateTable(){
      tbody.innerHTML = ''

    for (let computer of myComputers) {

        tbody.innerHTML += `<tr>
    <td>${computer.id}</td>
    <td>${computer.mark}</td>
    <td><img src=${computer.img} alt="">
    </td>
    <td>
       <button id='${computer.id}d' class="btn btn-danger">Delete</button>
       <button id='${computer.id}c' data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">Chnge</button>
    </td>
    </tr>`;
    }
    
}

updateTable();

const allInputs = document.querySelectorAll('input')
 
function addComputer(){
    if(!change){
        const newComputer = {
            id: myComputers[index].id,
            mark: allInputs[0].value,
            ram: allInputs[1].value,
            gpu: allInputs[2].value,
            img: allInputs[3].value,
            cpu: allInputs[4].value,
            rom: allInputs[5].value,
            os: allInputs[6].value,
            new: allInputs[7].value,
        }

        myComputers.push(newComputer)
        for(let input of allInputs){
            input.value = ''
        }
        for(let user of users ){
            if(user.name === currentUser){
                user.computers = myComputers
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        updateTable();
    } else{
        const index = myComputers.findIndex(comp => comp.id === id)

        const updatedComp = {
            id: myComputers.length === 0 ? 1 : myComputers.at(-1).id +1,
            mark: allInputs[0].value,
            ram: allInputs[1].value,
            gpu: allInputs[2].value,
            img: allInputs[3].value,
            cpu: allInputs[4].value,
            rom: allInputs[5].value,
            os: allInputs[6].value,
            new: allInputs[7].value,
        }

        myComputers[index] = updatedComp
        
        for(let input of allInputs){
            input.value = ''
        }

        for(let user of users ){
            if(user.name === currentUser){
                user.computers = myComputers
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        updateTable();
        change = false
    }
}

function deleteComputer(id){
    myComputers.filter((comp) => comp.id !== id)

    for(let user of users ){
        if(user.name === currentUser){
            user.computers = myComputers
        }
    }
}

function changeComputer(id){
    const currentComp = myComputers.find(comp => comp.id === id)
    allInputs[0].value = currentComp.mark
    allInputs[1].value = currentComp.ram
    allInputs[2].value = currentComp.gpu
    allInputs[3].value = currentComp.img
    allInputs[4].value = currentComp.cpu
    allInputs[5].value = currentComp.rom
    allInputs[6].value = currentComp.os
    allInputs[7].value = currentComp.new

    change - true
}

table.addEventListener('click', ()  => {
    if(e.target.innerHTML === 'Delete'){
        id = parseInt(e.target.id)
        deleteComputer(id);
    } else if (e.target.innerHTML === 'Change'){
        id = parseInt(e.target.id)
        changeComputer(id)
    }
})

saveBtn.addEventListener('click', addComputer)
