
export  class ViajeController{
    constructor(modelo){
        this.modelo=modelo
    }
    getAll = async(request,response)=>{   
        response.json(await this.modelo.getAll());
    }
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
        
        
}
    