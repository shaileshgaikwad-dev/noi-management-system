import type { ChallanCalculation } from "../types/challan.types";

export function calculateChallan(
  loanAmount: number,
  intimationCharges: number,
): ChallanCalculation {
  const amount = Number(loanAmount);
  const serviceCharges = Number(intimationCharges);

  const isValidAmount = Number.isFinite(amount) && amount > 0;
  const isValidCharges =
    Number.isFinite(serviceCharges) && serviceCharges >= 500;

  if (!isValidAmount && isValidCharges) {
    return {
      challan03: 0,
      challan05: 0,
      dhc: 0,
      intimationCharges: isValidCharges ? serviceCharges : 0,
      governmentCharges: 0,
      totalAmount: 0,
    };
  }

  //0.3 && 0.1 calculation
  let challan03: number = amount <= 500000 ? amount * 0.001 : amount * 0.003;

  let challan05: number = amount >= 3000000 ? 15000 : amount * 0.005;

  const dhc = 300;

  challan03 = Math.round(challan03);
  challan05 = Math.round(challan05);

  const governmentCharges = challan03 + challan05 + dhc;

  const totalAmount = governmentCharges + serviceCharges;

  return {
    challan03,
    challan05,
    dhc,
    intimationCharges: serviceCharges,
    governmentCharges,
    totalAmount,
  };
}
