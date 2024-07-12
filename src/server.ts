import fastify from "fastify";
import { prisma } from "./lib/prisma";
import { createTrip } from "./routes/create-trip";
import cors from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";

const app = fastify();

// Utilizado para definir quais frontends pode consumir a API
app.register(cors, {  
  origin: '*'
})

// Necessários para a utilização
// do fastify-type-provider-zod
app.setValidatorCompiler(validatorCompiler);     
app.setSerializerCompiler(serializerCompiler);  

// Registro de uma rota
app.register(createTrip);   
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivities);


// Define a porta que o servidor irá ouvir
app.listen({ port: 3333 }).then(() => {
  console.log("Server running");
});
