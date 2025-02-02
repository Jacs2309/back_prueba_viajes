import express from 'express';
import { Viajes } from '../Datos/viajes.js';
let ModelViajes = Viajes;
export class Viaje{
    static getAll(){
        return ModelViajes;
    }
    static getOneByID(id){
        return ModelViajes.find(viaje=>viaje.id == id);
    }

    static delete(id){
        return ModelViajes.filter(viaje=>viaje.id != id);
    }
    
    static create(viaje) {
        if (!viaje.success) {
            return Error;
        }

        const nuevoVIaje = {
            ...viaje.data
        }

        ModelViajes=[...ModelViajes,nuevoVIaje];
        return nuevoVIaje;
    }

    static update(id, viaje) {
        if (!viaje.success) {
            return { error: 'Validación de datos incorrecta', status: 400 };
        }
    
        const viajeIndice = ModelViajes.findIndex(v => v.id == id);
    
        if (viajeIndice === -1) {
            return { error: 'Viaje no encontrado', status: 404 };
        }
    
        const nuevoViaje = {
            ...ModelViajes[viajeIndice],
            ...viaje 
        };
        ModelViajes[viajeIndice] = nuevoViaje;
    
        return nuevoViaje;
    }
    
    
}
