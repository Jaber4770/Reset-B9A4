// Problem-1: ---------------------------------------------------------
function calculateMoney(totalSoldTicket) {
    if (totalSoldTicket !== "number" && totalSoldTicket >= 0) {
        const ticketPrice = 120;
        const gurdFee = 500;
        const staffLunch = 50;
        const totalStuff = 8;

        let totalIncome = totalSoldTicket * ticketPrice;
        let totalCost = gurdFee + (staffLunch * totalStuff);
        let totalRevenew = totalIncome - totalCost;

        return totalRevenew;
    }

    else {
        return "Please provide a number and it has to be Positive.";
    }


}

let getTotalRevenew = calculateMoney(130);
console.log(getTotalRevenew);





// Problem-2: ---------------------------------------------------------



function checkName(testName) {

    if (typeof testName !== "string") {
        return "invalid";
    }

    let goodNameTypes = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let testNameArr = testName.toLowerCase().split("");
    let testNameArrReverse = testNameArr.reverse();
    let lastLetterOfName = testNameArrReverse[0];

    if (goodNameTypes.includes(lastLetterOfName)) {
        return "This name is a Good Name.";
    }
    else {
        return "This name is a Bad Name";
    }



}

let testName = 'Rasheda';
const getName = checkName(testName);
console.log(getName);




// Problem-3: ---------------------------------------------------------

function deleteInvalids(passingArray) {

    if (Array.isArray(passingArray)) {
        let validNumber = [];
        for (const singleElement of passingArray) {
            if (typeof singleElement === "number" && isNaN(singleElement) === false) {
                validNumber.push(singleElement);
            }
        }
        return validNumber;
    }
    else {
        return "Invalid value";
    }
}

let passingArray = [1, 2, 3, 43, -343, false, true, 4, "54", undefined, 55, 45, 4, 54, 'nana', NaN];
let getNumberOfArray = deleteInvalids(passingArray);
console.log(getNumberOfArray);




// Problem-4: ---------------------------------------------------------


function password(accountDetails) {
    if (('name' in accountDetails && 'birthYear' in accountDetails && 'siteName' in accountDetails) && accountDetails.birthYear.toString().length === 4) {

        let websiteName = accountDetails.siteName;
        let udpateWebsiteName = websiteName[0].toUpperCase() + websiteName.slice(1);
        let userName = accountDetails.name;
        let birthYear = accountDetails.birthYear;
        let readyPassword = udpateWebsiteName + "#" + userName + "@" + birthYear;

        return readyPassword;
    }
    return "invalid";

}


let accountDetails = { name: "rahat", birthYear: 2000, siteName: "Facebook" };
let getPassword = password(accountDetails);
console.log(getPassword);






// Problem-5: ---------------------------------------------------------


function monthlySavings(earnings, livingCost) {
    if (Array.isArray(earnings) && livingCost !== "number") {
        let totalEarning = 0;
        for (let earning of earnings) {
            if (earning >= 3000) {
                let tax = earning * 20 / 100;
                earning = earning - tax;
            }
            totalEarning = totalEarning + earning;
        }
        let savingsMoney = totalEarning - livingCost;
        if (savingsMoney >= 0) {
            return savingsMoney;
        }
        else if (savingsMoney < 0) {
            return "earn more";
        }
    }
    else {
        return "invalid input";
    }

}

let earnedMoney = [1000, 2500, 2500];
let livingCost = 5400;
let getSaving = monthlySavings(earnedMoney, livingCost);
console.log(getSaving);



