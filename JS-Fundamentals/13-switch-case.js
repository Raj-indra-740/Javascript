let a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3:
    console.log("yes thats me")
    
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

let userType = 'user'
let userTask= 'change user name'
switch (userType) {
        case 'admin':
            switch(userTask){
              case 'change access':
                console.log('access change sucessfully');
                break;
              case 'add category':
                console.log('addes category sucessfully');
                break;
              case 'change theme of website':
                console.log('theme change sucessfully');
                break;
            }
            break;
        case 'user':
          switch(userTask){
            case 'change passowrd':
              console.log('passowrd change sucessfully');
              break;
            case 'change user name':
              console.log('user name change sucessfully');
              break;
            case 'change theme of website':
              console.log('theme change sucessfully');
              break;
          }
          break;
        default:
             console.log('role not recognized.');
    }