const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Hero", schema);
