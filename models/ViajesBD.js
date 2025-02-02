import mongoose,{model} from "mongoose";
<<<<<<< HEAD

const viajeS = mongoose.Schema(
    {
        id:Number,
        destino: String,
=======
import  {conexion} from "../help/conexion.js";
conexion();
const viajeS = mongoose.Schema(
    {
        id:Number,
        origen: String,
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        pasajeros: Number,
        tarifa: Number
    },
    {
<<<<<<< HEAD
        versionkey: false
=======
        versionkey: False
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
    }
)
const Viaje = model('Viaje', viajeS);
export class ViajeDB{
    static async getAll(){
        try{
            return await Viaje.find();
        }catch(e){
            console.log(e);
        }
    }
    static async getOneByID(id){
        try {
            if(!id || typeof id !=='number'){
                throw new Error(`Id invalido ${id}`);
            }
<<<<<<< HEAD
            return await Viaje.findOne({id:id});
=======
            return await Viaje.findById(id);
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        } catch (e) {
            console.error("Error al obtener el artículo por ID:", e.message);
        }
    }
<<<<<<< HEAD
    static async delete(id){
=======
    static async delete(){
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        try {
            if( typeof id !=='number'){
                throw new Error(`Id invalido ${id}`);
            }
<<<<<<< HEAD
            return await Viaje.deleteOne({ id: id });
=======
            return await Viaje.deleteOne({ id: Number });
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        } catch (e) {
            console.error("Error al eliminar el artículo:", e);
            throw e;
        }
    }
<<<<<<< HEAD
    static async create(vj) {
        if (vj.error) {
            return { error: vj.error, status: 400 };
        }
        const nViaje = {
            ...vj.data
        };
        try {
            const gViaje = new Viaje(nViaje); 
            await gViaje.save();
            return gViaje; 
        } catch (e) {
            console.error("Error al insertar el viaje:", e);
            return { error: "Error al guardar el viaje en la base de datos", status: 500 }; // Devuelve un objeto de error
=======
    static async create(viaje){
        if(!viaje.succes){
            return new Error("Erro en el nuevo viaje");
        }
        const nViaje={
            ...viaje.data
        }
        const gViaje = Viaje(nViaje);
        try {
            await gViaje.save()
            return nViaje;
        } catch (e) {
            console.error("Error al Insertar el viaje:", e);
            throw e;
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
        }
    }
    static async update(id, vali){
        try {
            return await Viaje.findOneAndUpdate({id:id},{...vali.data},{new:true});
        } catch (e) {
            console.error("Error al actualizar el viaje:", e);
            throw e;
        }
    }
}