import express from "express";
import swaggerUi from "swagger-ui-express";

import apiDocumentation from "./assets/apiDocumentation.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

export { app };
