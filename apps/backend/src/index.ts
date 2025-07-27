import { app } from "./server";

const port = 6000;

app.listen(port, async () => {
    console.log(`Backend is running on http://localhost:${port}`);
});


app.on("error", (err) => {
    console.error("Server error:", err);
});