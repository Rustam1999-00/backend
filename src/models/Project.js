const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
    },
    isCompleted: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Project", schema);
