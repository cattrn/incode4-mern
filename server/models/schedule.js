const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const scheduleSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    day: { type: Number, required: true },
    startAt: { type: String, required: true },
    endAt: { type: String, required: true },
  },
  { timestamps: true }
)

const Schedule = mongoose.model("Schedule", scheduleSchema)

module.exports = Schedule
