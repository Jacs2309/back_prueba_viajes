import express from 'express';
import cors from "cors";
import { conexion } from './help/conexion.js';
import { routerViaje } from "./routes/ViajeRoutes.js";
import { ViajeDB } from './models/ViajesBD.js';
const app = express();

app.use(express.json());
<<<<<<< HEAD
const PORT = process.env.PORT || 3030;
=======
const PORT=3030;
>>>>>>> f8e2d09aea4c98600a86ad01a219bdca2b196a55
conexion();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api/viajes',routerViaje(ViajeDB));
app.listen(PORT,()=>{
    console.log("Servidor a la espera");
})
