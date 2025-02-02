import { validarViaje, validarViajeP } from "../help/zod.js";
export  class ViajeController{
    constructor(modelo){
        this.modelo=modelo
    }
    getAll = async(request,response)=>{   
        response.json(await this.modelo.getAll());
    }
    getOneByID = async (request, response) => {
        try {
            const id = Number(request.params.id);
            if (isNaN(id)) {
                return response.status(400).json({ error: "El ID debe ser un número válido" });
            }
            const viaje = await this.modelo.getOneByID(id);
            if (viaje) {
                response.json(viaje); 
            } else {
                response.status(404).json({ error: "Viaje no encontrado" }); 
            }
        } catch (error) {
            console.error("Error en getOneByID:", error);
            response.status(500).json({ error: "Error interno del servidor" }); s
        }
    };
    delete = async(request,response)=>{
        const id=Number(request.params.id);
        const devolverViajes=await this.modelo.delete(id);
        if (devolverViajes){
            response.json(devolverViajes);
        }     
        else{
            response.status(400).end();
            } 
    }   
    create = async(request,response)=>{
        try {
            const viaje = validarViaje(request.body);
            if (viaje.error) {
                return response.status(400).json({ error: viaje.error });
            }

            const nuevoViaje = await this.modelo.create(viaje);
            response.status(201).json(nuevoViaje);
        } catch (error) {
            console.error("Error en create:", error);
            response.status(500).json({ error: "Error interno del servidor" });
        }   
    };

    update = async (request, response) => {
        const id = Number(request.params.id);
        const Viajevali = validarViajeP(request.body);
    
        const nuevoViaje = await this.modelo.update(id, Viajevali);
    
        if (nuevoViaje.error) {
            return response.status(nuevoViaje.status).json({ error: nuevoViaje.error });
        }
    
        return response.status(200).json(nuevoViaje);
    };
            
}
    