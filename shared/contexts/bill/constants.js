const enumsDiscountMode = ["None", "Amount", "%"]

const initialState = {
  items: [{
    id: 1,
    name: "Chicken",
    price: 200,
    hasTaxed: true,
    hasServiceCharged: true,
    isDiscounted: true,
    discountMode: enumsDiscountMode[1],
    discountAmount: 10
  }],
  calculatedValues: {
    subTotal: 0,
    tax: 0,
    serviceCharge: 0,
    grandTotal: 0
  }
};

export { initialState, enumsDiscountMode };
