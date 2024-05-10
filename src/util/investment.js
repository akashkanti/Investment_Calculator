// This function expects a JS object as an argument
// The object Should contain the following prperties
// -initialInvestment: The initial investment amount
// -anualInvestment: The amount invested evey year
// -expectedReturn: The expected (annual) rate of return
// -duration: The investment duration (time frame)


export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}){
    const annualData = [];
    let investmentValue = initialInvestment;

    for(let i = 0; i < duration; i++){
        const interestEarnedInyear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInyear + annualInvestment;
        annualData.push({
            year: i + 1, // year identifier
            interest: interestEarnedInyear, // the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment value at end of year
            annualInvestment: annualInvestment,
        });
    }


    return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage : formatter.format(1000) => yields "$1,000"

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});


   
  

  
  

