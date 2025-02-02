import express from 'express';
import cors from "cors";
import { conexion } from './help/conexion.js';
import { routerViaje } from "./routes/ViajeRoutes.js";
import { ViajeDB } from './models/ViajesBD.js';
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3030;
conexion();
app.use(cors({ origin: 'https://front-prueba-viajes.vercel.app/' }));
app.use('/api/viajes',routerViaje(ViajeDB));
app.listen(PORT,()=>{
    console.log("Servidor a la espera");
})
