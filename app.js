let users = [ // create user
    {
        "name": "Mg Mg",
        "age": 22,
        "Member_Type": "Gold",
        "Education": "Graduated",
        "Married": true,
        "image": "https://randomuser.me/portraits/men/81.jpg",
    },
    {
        "name": "Su Su",
        "age": 34,
        "Member_Type": "Platinum",
        "Education": "Grade 11",
        "Married": true,
        "image": "https://randomuser.me/portraits/women/81.jpg",
    },
    {
        "name": "Aung Aung",
        "age": 33,
        "Member_Type": "Silver",
        "Education": "Graduated",
        "Married": false,
        "image": "https://randomuser.me/portraits/men/76.jpg",
    },
    {
        "name": "Mya Mya",
        "age": 24,
        "Member_Type": "Gold",
        "Education": "Grade 10",
        "Married": false,
        "image": "https://randomuser.me/portraits/women/77.jpg",
    },
    {
        "name": "Aye Aye",
        "age": 25,
        "Member_Type": "Silver",
        "Education": "Grade 11",
        "Married": false,
        "image": "https://randomuser.me/portraits/women/55.jpg",
    },
];

function personIterator(user) { // iterator
    let userIndex = 0;

    return {
        next: function () {
            return userIndex < user.length ?
                { "value": user[userIndex++], "done": false } :
                { "done": true };
        }
    }
}

let persons = personIterator(users);

let btn = document.querySelector("#btn");
let infoDisplay = document.querySelector(".infoDisplay");
let imgDisplay = document.querySelector(".imgDisplay");

btn.addEventListener("click", changeUser);

function changeUser() {
    let person = persons.next();

    if (!person.done) { // if person(done) false
        imgDisplay.innerHTML = `
            <img src="${person.value.image}">
        `;

        infoDisplay.innerHTML = `
        <ul>
            <li>Name : ${person.value.name}</li>
            <li>Age : ${person.value.age}</li>
            <li>Member_Type : ${person.value.Member_Type}</li>
            <li>Education : ${person.value.Education}</li>
            <li>Married : ${person.value.Married}</li>
        </ul>
        `;
    } else { // if person(done) true, reload 
        window.location.reload();
    }
}

changeUser(); // call this once

