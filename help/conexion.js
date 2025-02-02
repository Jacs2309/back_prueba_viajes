import mongoose from "mongoose";
export const conexion = async()=>{
    try {
        await mongoose.connect("mongodb+srv://julicanas:Jacs2309.@cluster0.kumb6.mongodb.net/");
        console.log("Conectado correctamente a la base de datos");
    } catch (e) {
        console.error("Error al conectar a la base de datos:", e.message);
    }
}