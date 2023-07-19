import express from 'express';
import {createUser,createpost,session,favourite, post,Comment,like,Reply,Action} from "./models/user";
import { dbConnect } from './config/conn';
const port=4000;
const app = express();
createUser();

dbConnect();
app.listen(port,function(){
    console.log(`Server connect at ${port}`);
});