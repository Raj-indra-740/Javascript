function validateCart(){
    return true
}
function createOrder(cart){
    return new Promise((resolve, reject) => {
        if(!validateCart()){
            reject(new Error("Cart is not valid"))
        }
        let orderId = '42831';
        if(orderId) {
            resolve({orderId,cart})
        }
    })
}

function proceedToPayment({orderId,cart}){
    return new Promise((resolve, reject) => {
        let paymentStatusValue = (function(orderId){
            return true;
        })(orderId)
        const paymentDetail = {
            paymentStatus: paymentStatusValue,
            message:'Payment is success full',
            orderDetail: {
                orderId: orderId, 
                orderItems: cart,
                payment:2100,
            },
        }
        if(paymentStatusValue){
            setTimeout(() =>{
                resolve(paymentDetail)
            }, 5000)
        }
        else{
            reject(new Error("Something went wrong"))        
        }
    })
}

function showOrderSummery(paymentDetail){
    return new Promise((resolve, reject) => {
        let orderDetail = paymentDetail.orderDetail
        if(paymentDetail.paymentStatus){
            resolve(orderDetail)
        }
        reject(new Error('Something went wrong!'))
    })
}

function updateWallet(orderDetail){
    return new Promise((resolve, reject) => {
        console.log('Wallet',userWallet)
        if(orderDetail){
            userWallet.currAmount = userWallet.currAmount - orderDetail.payment 
            resolve('Process is completed')
        }
        reject(new Error('Something went wrong!'))
    })
}
const userWallet = {
    walletId: '#646WAS',
    currAmount: 5000,
}
createOrder(['jeans','shirt','watch'])
    .then(({orderId,cart}) => {
        console.log({orderId,cart})
        return proceedToPayment({orderId,cart})
    })
    .then((paymentDetail) =>{
        console.log(paymentDetail)
        return showOrderSummery(paymentDetail)
    })
    .then((orderDetail) => {
        console.log(orderDetail)
        return updateWallet(orderDetail)
    })
    .then((message) => {
        console.log(message)
        console.log(`Your current wallet balance is :: ${userWallet.currAmount}`)
    })
    .catch((error) => console.log(error))

