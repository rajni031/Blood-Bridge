const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      require: [true, "blood quantity is required"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", 
      // required: function () {
      //   return this.inventoryType === "out";  // i  have done this after deleting all thee inventories.
      //   //if any problem occur then comment out this
      // },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      // required: function () {
      //   return this.inventoryType === "in";
      // },
    },
  },
  { timestamps: true } // objecrt time info
);

module.exports = mongoose.model("Inventory", inventorySchema);
