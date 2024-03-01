//написати функцію congratsIfMoreThan100(), яка приймає масив даних(підписників) і виводить на екран за доп. функції alert() 
//привітання,  якщо у вас більше 100 підписників
const users = [
    { name: 'user1', age: 20 },
    { name: 'user2', age: 21 },
    { name: 'user3', age: 22 },
    { name: 'user4', age: 23 },
    { name: 'user15', age: 24 },
    { name: 'user16', age: 25 },
    { name: 'user17', age: 26 },
    { name: 'user18', age: 27 },
    { name: 'user19', age: 27 },
    { name: 'user10', age: 28 },
];
function congratsIfMoreThan100(arr) {
    if (arr.length < 100) {
        alert('Hello, dear friends');
    } else {
        alert('Goodbay')
    }
}
congratsIfMoreThan100(users);