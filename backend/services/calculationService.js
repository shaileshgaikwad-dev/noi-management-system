export function calculateChallanService(loanAmount, intimationCharges) {
  try {
    const amount = Number(loanAmount);
    const serviceCharge = Number(intimationCharges);

    if (!Number.isFinite(amount) || amount < 0) {
      const amountError = new Error(
        "Loan amount must be a valid positive number",
      );
      amountError.statusCode = 400;
      throw amountError;
    }

    if (!Number.isFinite(serviceCharge) || serviceCharge < 500) {
      const serviceError = new Error(
        "Intimation charges should not be less than 500",
      );
      serviceError.statusCode = 400;
      throw serviceError;
    }

    //0.3 calculation

    let challan03 = amount <= 500000 ? amount * 0.001 : amount * 0.003;

    let challan05 = amount >= 3000000 ? 15000 : amount * 0.005;

    const dhc = 300;

    //Rounding government charges
    challan03 = Math.round(challan03);
    challan05 = Math.round(challan05);

    //government charges
    const governmentCharges = challan03 + challan05 + dhc;

    //Total amount payable by client
    const totalAmount = governmentCharges + serviceCharge;

    return {
      challan03,
      challan05,
      dhc,
      intimationCharges: serviceCharge,
      governmentCharges,
      totalAmount,
    };
  } catch (error) {
    console.log("Calculation challan error", error);
    throw error;
  }
}
