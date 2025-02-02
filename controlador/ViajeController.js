<<<<<<< HEAD
import { validarViaje, validarViajeP } from "../help/zod.js";
=======

>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
export  class ViajeController{
    constructor(modelo){
        this.modelo=modelo
    }
    getAll = async(request,response)=>{   
        response.json(await this.modelo.getAll());
    }
<<<<<<< HEAD
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
=======
    getOneBiID = async(request,response)=>{
        const id = Number(request.params.id);
        const viaje = await this.modelo.getOneByID(id);
        if (viaje){
            response.json(viaje);
        }
        else{
            response.status(400).end();
        }
    }
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
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
<<<<<<< HEAD
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
            
=======
        const viaje = request.body;
        if (viaje.error){
            return response.status (400).json('Validación de datos es Incorrecta');
        }

        const nuevoViaje=await this.modelo.create(viaje);
        response.json(nuevoViaje);   
        }
    
        update = async (request, response) => {
            const id = Number(request.params.id);
            const Viajevali = request.body;
        
            const nuevoViaje = await this.modelo.update(id, Viajevali);
        
            if (nuevoViaje.error) {
                return response.status(nuevoViaje.status).json({ error: nuevoViaje.error });
            }
        
            return response.status(200).json(nuevoViaje);
        };
        
        
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
}
    