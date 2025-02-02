import mongoose from "mongoose";
export const conexion = async()=>{
    try {
<<<<<<< HEAD
        await mongoose.connect("mongodb+srv://julicanas:Jacs2309.@cluster0.kumb6.mongodb.net/viajes?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
=======
        await mongoose.connect("mongodb+srv://julicanas:Jacs2309.@cluster0.kumb6.mongodb.net/");
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        console.log("Conectado correctamente a la base de datos");
    } catch (e) {
        console.error("Error al conectar a la base de datos:", e.message);
    }
}