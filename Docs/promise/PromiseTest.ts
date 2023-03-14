// async function calculate(flag: boolean, successCallback: any, failureCallback: any): Promise<void> {
//     if (flag) {
//         successCallback();
//     } else {
//         failureCallback();
//     }
// }

const calculate = (flag: boolean) => new Promise<void>((resolve, reject) => {
    if (flag) {
        resolve();
    } else {
        reject();
    }
})

function successCallback() {
    console.log("SUCCESS!!");
}

function failureCallback() {
    console.log("FAIL!!");
}

calculate(false)
.then(successCallback)
.catch(failureCallback);