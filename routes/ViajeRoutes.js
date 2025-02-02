import {Router} from "express";
import { ViajeController } from "../controlador/ViajeController.js";

export const routerViaje = (modelo)=>{
    const controlador = new ViajeController(modelo);
    const viajeRouter=Router();

    viajeRouter.get('/',controlador.getAll)
    viajeRouter.get('/:id',controlador.getOneByID)
    viajeRouter.delete('/:id',controlador.delete)
    viajeRouter.post('/',controlador.create)
    viajeRouter.put('/:id',controlador.update)
    return viajeRouter;

};

