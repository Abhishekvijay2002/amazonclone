const mongoose = require("mongoose");

const cartschema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    product: [
      {
        productid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    totalprice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

cartschema.methods.calculateTotalprice = function () {
  this.totalprice = this.product.reduce(
    (total, p) => total + p.price * p.quantity,
    0
  );
};

module.exports = mongoose.model("Cart", cartschema);
