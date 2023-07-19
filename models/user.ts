import { timeStamp } from 'console';
import mongoose, {Schema} from 'mongoose';
import { text } from 'stream/consumers';

export const createUser =()=>{
    const UserSchema = new Schema({
        
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:20
    },
    first_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:20
    },
    last_name: {
        type: String,
        required: true,
        minlength:20,
        maxlength:20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    bio:{
        type: String,
        required: false,
        minlength: 4,
        maxlength:30
    },
    dob:{
        type:Date,
        require:true
    },
    // profilePicture: String,
    no_of_posts: {
        type: Number,
        default: 0
    },
    no_of_followers: {
        type: Number,
        default: 0
    },
    no_of_followings: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    })

}
export const createpost=()=>{
    const PostSchema=new Schema({
        user_Id: {
            type: Number,
            ref: 'User',
            required: true
          },
          image:{
            type:"string"
          },
          caption: {
            type: String,
            required: true
          },
          like:{
            type:Number,
            require:true
          },
          comment:{
            type:Number,
            ref:'User',
            require:true
          },
          createdAt: {
            type: Date,
            default: Date.now()
          },
    })
}
export const session=()=>{
    const sessionSchema=new Schema({
        userId: {
            type: Number,
            ref: 'User',
            required: true
          },
          session_time: {
            type: timeStamp,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
    })
}
export const followerstatus=()=>{
    const StatusSchema=new Schema({
        senderId: {
            type: Number,
            ref: 'User',
            required: true
          },
          receiverId: {
            type: Number,
            ref:'User',
            required: true
          },
          status:{
            type:Number,
            require:true
          },
    })
}
export const favourite=()=>{
    const favouriteSchema=new Schema({
    userId: {
        type: Number,
        ref: 'User',
        required: true
      },
      postId: {
        type: Number,
        ref: 'User',
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
})
}


export const post=()=>{
    const PostSchema=new Schema({
        userId: {
            type: Number,
            ref: 'User',
            required: true
          },
          caption:{
            type:text,
            require:true
          },
          like:{
            type:Number,
            require:true
          },
          Comment_count:{
            type:Number,
            require:false
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
          
          
    })
}
export const Comment=()=>{
    const CommentSchema=new Schema({
        userId: {
            type: Number,
            ref: 'User',
            required: true
          },
          postId: {
            type: Number,
            ref: 'post',
            required: true
          },
          comment_id:{
            type:Number,
            require:true,
          },

          desc:{
            type:text,
            require:true
          },
          replies:{
            Comments:[Reply]
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
    })
}
export const Reply=()=>{
    const ReplySchema=new Schema({
        userId: {
            type: Number,
            ref: 'User',
            required: true
          },
          desc:{
            type:text,
            require:true
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
    })
}
export const like=()=>{
    const LikeSchema=new Schema({
        userId: {
            type: Number,
            ref: 'User',
            required: true
          },
          postId: {
            type: Number,
            ref: 'User',
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          },
    })
}

export const Action=()=>{
    const ActionSchema=new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
          postId:{
            type:Schema.Types.ObjectId,
            ref:'User',
            require:true
          },
        Comments:[Comment],
        likes:[like]

    })
};
