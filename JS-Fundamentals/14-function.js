greetUser();

function greetUser(userObj, userType = "user") {
  if (userObj) {
    console.log(userType);
    if (userObj.firstLogin) {
      console.log("we glad u choose our platfrom" + " " + userObj.firstName);
    } else {
      console.log(
        "Welcome back" +
          " " +
          userObj.userName +
          " " +
          "Aka" +
          " " +
          userObj.firstName +
          " " +
          userObj.lastName
      );
    }
  }
}

let userOne = {
  id: 54,
  userName: "usBro221",
  firstName: "Rajiv",
  lastName: "prathab",
  firstLogin: false,
};
let userTwo = {
  id: 221,
  userName: "weebo9",
  firstName: "hiren",
  lastName: "patel",
  firstLogin: true,
};

greetUser(userOne, "admin");

greetUser(userTwo);

let pow = function (x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }
  return res;
};

console.log(pow(9, 3));

// main diference btw function defination is we can call it before it declaration in code flow because JS engine we move all global function deiclaration on the top

let flag = true;
function ask(question, yes, no) {
  if (flag) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  }
);

ask(
    "Do you agree?",
    () => console.log('i agreed.'),
    () => console.log('you canceled the execution.'),
)
