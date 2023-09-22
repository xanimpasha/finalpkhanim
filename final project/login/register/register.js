const allInputs = document.querySelectorAll("input");
const button = document.queryselector(".button ");
const users = localStorage.getItem('users')


btn.addEventListener("click", (e) => {
    if (allInputs[1].checkValidity()) {
        e.preventDefault();
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            password: allInputs[2].value,
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users))

        location.href = '../login/index.html'
    }
})                                 