const database = [
    {name: "John", country: "Israel", age: 19, isMarried: true},
    {name: "Mary", country: "Israel", age: 29, isMarried: false},
    {name: "Bill", country: "Belgium", age: 10, isMarried: false},
    {name: "Jane", country: "France", age: 30, isMarried: true},
    {name: "Hanna", country: "France", age: 9, isMarried: false},
    {name: "George", country: "Israel", age: 80, isMarried: true}
];
console.log(database);

// Task 1
function task1() {
    const filt = database.filter(function (val) {
        return val.isMarried;
    }, {});
    console.log(filt);
}

// Task 2
function task2() {
    let srtArr = database.slice(0);
    const srt = srtArr.sort(function (a, b) {
        return a.age - b.age;
    })
    console.log(srt);
}

// Task 3
function task3() {
    const red = database.reduce(function (a, b) {
        return a + b.age;
    }, 0) / database.length;
    console.log('Average array age is ' + red);
}

// Task 4
function task4() {
    const stat = database.reduce(function (a, b) {
        if (a[b.country]) {
            a[b.country]++;
        } else {
            a[b.country] = 1;
        }
        return a;
    }, {});
    console.log(stat);
}

// Task 5
function task5() {
    const newArr = database.slice(0);

    const new1 = newArr.filter(function (val) {
        return val.isMarried;
    }, {});

    const resArr1 = new1.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        } else if (a.name < b.name) {
            return 1;
        }
        return 0;
    })
    const resArr2 = new1.reduce(function (a, b) {
        return a + b.age;
    }, 0) / new1.length;

    const new2 = newArr.filter(function (val) {
        return !val.isMarried;
    }, {});
    const resArr3 = new2.sort(function (a, b) {
        return b.age - a.age;
    })

    console.log("task 5.1")
    console.log(resArr1);
    console.log("task 5.2");
    console.log(resArr3);
    console.log("task 5.3");
    console.log("Average age of married group - " + resArr2);
}

// Task 6
function task6() {
    const remInd = parseInt(prompt("Please enter index to remove"));
    if (remInd > 5 || remInd < 0 || isNaN(remInd)) {
        return alert("Error value");
    }
    const remArr = database.slice(0);
    remArr.splice(remInd, 1);
    console.log(remArr);
}