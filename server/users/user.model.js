const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ["admin","teacher","student"] },
  createdDate: { type: Date, default: Date.now }
});

schema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", schema)

const user = new User({
  email: "manu@creative-tim.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Admin",
  role: "admin"
},{
  email: "emanuelioannazare@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
},{
  email: "emanuelioannazare@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Student",
  role: "student"
}
)

user.save(err => {
  if(err) throw err;
})

module.exports = User;
