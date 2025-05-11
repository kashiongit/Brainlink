// mongodb+srv://kashish:@fCFyP(uE5cNsiB@cluster0.ffwml.mongodb.net/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
  type: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
  hash: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

const UserModel = mongoose.model('User', UserSchema);
const ContentModel = mongoose.model('Content', ContentSchema);
const LinkModel= mongoose.model('Links', LinkSchema);

module.exports = {
    UserModel,
    ContentModel,
    LinkModel
}