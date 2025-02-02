import mongoose,{model} from "mongoose";
import  {conexion} from "../help/conexion.js";
conexion();
const viajeS = mongoose.Schema(
    {
        id:Number,
        origen: String,
        pasajeros: Number,
        tarifa: Number
    },
    {
        versionkey: False
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
            return await Viaje.findById(id);
        } catch (e) {
            console.error("Error al obtener el artículo por ID:", e.message);
        }
    }
    static async delete(){
        try {
            if( typeof id !=='number'){
                throw new Error(`Id invalido ${id}`);
            }
            return await Viaje.deleteOne({ id: Number });
        } catch (e) {
            console.error("Error al eliminar el artículo:", e);
            throw e;
        }
    }
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