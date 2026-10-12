import { calculateChallanService } from "../services/calculationService.js";

const testamounts = [
  { loanAmount: 480000, intimationCharge: 700 },
  { loanAmount: 500000, intimationCharge: 800 },
  { loanAmount: 500001, intimationCharge: 900 },
  { loanAmount: 1200000, intimationCharge: 1000 },
  { loanAmount: 2000000, intimationCharge: 800 },
  { loanAmount: 3000000, intimationCharge: 900 },
  { loanAmount: 4000000, intimationCharge: 1000 },
];

for (const amount of testamounts) {
  const result = calculateChallanService(
    amount.loanAmount,
    amount.intimationCharge,
  );
  console.log(`Loan amount : ${amount.loanAmount}`);
  console.log(result);
}
