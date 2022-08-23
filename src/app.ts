import "reflect-metadata";
import "express-async-errors";
import express from "express";

import handleErrorMiddleware from "./middlewares/handleError.middleware";

import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import propertyRoutes from "./routes/property.routes";
import scheduleRoutes from "./routes/schedule.routes";

const app = express();
app.use(express.json());

app.use(handleErrorMiddleware);

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/properties", propertyRoutes);
app.use("/schedules", scheduleRoutes);

export default app;
