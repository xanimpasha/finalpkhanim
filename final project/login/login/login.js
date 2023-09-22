const users = [
    {
        name: "u1",
        password: "p1",
        computers: [
            { id: 1, 
              mark: 'Acer', 
              img: 'https://media.ldlc.com/r1600/ld/products/00/06/03/82/LD0006038244_0006038293.jpg', 
              cpu: 'intel core i7', 
              gpu: 'rtx 3060' 
            },
        ]
    }
];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}

const loginBtn = document.querySelector('#login');
const allInputs = document.querySelectorAll('input');
const alertDiv = document.querySelector('.alert')
const form = document.querySelector('form')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }

    form.classList.add('was-validated');

    const users = JSON.parse(localStorage.getItem('users'));

    let userAvaible = users.some(
        (user) =>
            user.name === allInput[0].value && user.password === allInput[1].value
    );

    if (userAvaible) {
        location.href = '../main/main.html';
        localStorage.setItem('currentUser', allInput[0].value)
    } else {
        alertDiv.style.display = 'block';
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 3000)
    }
})