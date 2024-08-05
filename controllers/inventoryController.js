const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModels = require("../models/userModels");

const createInventoryControlller = async (req, res) => {
  try {
    const { email } = req.body;
    //validation
    const user = await userModels.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    // if (inventoryType === "out" && user.role !== "user") {
    //   throw new Error("Not a ");
    // }

    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const user = new mongoose.Types.ObjectId(req.body.userId);
      console.log("Requested Blood Group:", requestedBloodGroup);
      console.log("Requested Quantity:", requestedQuantityOfBlood);
      console.log("User ID:", user);
      //calculate Blood Quanitity

      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        { $match: { inventoryType: "in", bloodGroup: requestedBloodGroup } },
        { $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } } },
      ]);
      console.log("total in", totalInOfRequestedBlood);
      // Accessing the total quantity
      const totalIn =
        totalInOfRequestedBlood.length > 0
          ? totalInOfRequestedBlood[0].total
          : 0;

      console.log("me ");
      // const totalIn = totalInOfRequestedBlood[0]?.total||0;
      //calculate OUT Blood Quanitity

      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            // user:new mongoose.Types.ObjectId(req.body.userId),
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // Calculate Blood Quantity Out
      console.log("out of ", totalOutOfRequestedBloodGroup);

      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      //in & Out Calc
      const availableQuanityOfBloodGroup = totalIn - totalOut;
      //quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup} ML of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      // req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
      console.log(req.body.donar);
    }

    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Reocrd Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in create inventory API",
      error,
    });
  }
};
// GET ALL BLOOD RECORS
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        user: req.body.donarId,
      })
      .populate("donar")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      messaage: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};

// GET DONAR RECORDS
const getDonarsController = async (req, res) => {
  try {
    const user = req.body.userId;
    console.log(user)
    // find donars
    const donarId = await inventoryModel.distinct("donar", {
      user,
    });
    console.log(donarId)
    console.log(donarId)
    const donars =await userModels.find({ _id: { $in:  donarId } })

    return res.status(200).send({
      success:true,
      message:"Donar record fetched successfully",
      donars
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar records",
      error,
    });
  }
};
module.exports = {
  createInventoryControlller,
  getInventoryController,
  getDonarsController,
};
