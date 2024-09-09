// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

//Note: If there’s no variable user at all, then user?.anything triggers an error


let userAdmin = {
    userName: 'raka',
    type:'admin',
    admin() {
      console.log("I am admin");
    }
};
let user = {
    userName:'pika',
    type:'user',
};

userAdmin.admin?.()
user.admin?.()
//Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors

delete user?.lastName

console.log(user)

// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.