// написати функцію, яка приймає масив об'єктів, пробігається по ньому
// і додає прикметники, які описують зовнішню красу людини відповідно до її статі

const people = [
    {
        name: 'Leon',
        sex: 'male'
    },
    {
        name: 'Anna',
        sex: 'female'
    },
    {
        name: 'Brad',
        sex: 'male'
    },
    {
        name: 'Yulia',
        sex: 'female'
    },
    {
        name: 'Anton',
        sex: 'male'
    },
    {
        name: 'Ola',
        sex: 'female'
    }
]

function addAdjective(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.sex === 'male') {
            element.name += ' handsome';
        } else {
            element.name += ' beautiful';
        }
    }
    return arr;
}
console.log(addAdjective(people));