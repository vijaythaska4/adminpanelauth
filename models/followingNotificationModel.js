const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followingNotificationModel = new Schema({
    senderId: {  //this is sender kon follow ker rha he
    type: Schema.Types.ObjectId,
    ref: 'user', // Reference to the User schema
    required: true,
  },
  reciverId: {   //this is receiver kis ko follow ker rha he 
    type: Schema.Types.ObjectId,
    ref: 'user', // Reference to the User schema
    required: true,
  },
  message:{
    type:String
  },
  is_read:{
    type:Number,
    enum:[0,1],//0 for not read 1 for read
    default:0
  }
},{ timestamps: true });

const followingNotification = mongoose.model('followingNotificationModel', followingNotificationModel);

module.exports = followingNotification;
