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
  }]
};

export { initialState };
