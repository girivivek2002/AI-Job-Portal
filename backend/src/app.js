import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js"
import errorHandler from "./middleware/error.middleware.js";
import candidateRoutes from "./routes/candidate.routes.js"
import jobRoutes from "./routes/job.routes.js"
import applicationRoutes from "./routes/application.routes.js"
import resumeRoutes from './routes/resume.routes.js'
import recruiterdashboardRoutes from './routes/recruiter.router.js'

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());

app.use(errorHandler);

app.get("/test", (req, res) => {
    res.json({
        message: "working"
    });
});

app.use("/api/auth", authRoutes)

app.use(
    "/api/candidates",
    candidateRoutes
);

app.use(
    "/api/jobs",
    jobRoutes
);

app.use(
    "/api/applications",
    applicationRoutes
)
app.use("/api/resume", resumeRoutes)

app.use("/api/recruiter", recruiterdashboardRoutes)

app.use(errorHandler);
app.get("/", (req, res) => {
    res.json({
        message: "Mr-Hyre API Running"
    });
});

export default app;