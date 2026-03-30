import mongoose from "mongoose";
const connDB = async()=>{
    try{
    await 
    mongoose.connect("mongodb://127.0.0.1:27017/myDB");
    console.log("mongodb conneceted");
}catch(error){
    console.log(error);
}
};
export default connDB;