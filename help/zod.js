import zod from 'zod';
const viajeS=zod.object({
    id: zod.number(),
    destino: zod.string(),
    pasajeros: zod.number(),
    tarifa: zod.number(),
})

export const validarViaje =(viaje)=>{
   return viajeS.safeParse(viaje);
}

export const validarViajeP=(viaje)=>{
    return viajeS.partial().safeParse(viaje);
}