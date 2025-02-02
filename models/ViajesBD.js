import mongoose,{model} from "mongoose";

const viajeS = mongoose.Schema(
    {
        id:Number,
        destino: String,
        pasajeros: Number,
        tarifa: Number
    },
    {
        versionkey: false
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
            return await Viaje.findOne({id:id});
        } catch (e) {
            console.error("Error al obtener el artículo por ID:", e.message);
        }
    }
    static async delete(id){
        try {
            if( typeof id !=='number'){
                throw new Error(`Id invalido ${id}`);
            }
            return await Viaje.deleteOne({ id: id });
        } catch (e) {
            console.error("Error al eliminar el artículo:", e);
            throw e;
        }
    }
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