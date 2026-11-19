const http = require("http");

// This backend instance has its own identity and port.
const SERVER_ID = "SERVER-1";
const PORT = 3001;

// Create an HTTP server.
const server = http.createServer((req, res) => {

    // Set the response content type to JSON.
    res.setHeader("Content-Type", "application/json");

    // Handle the health-check endpoint.
    if (req.url === "/health") {
        res.writeHead(200);

        res.end(JSON.stringify({
            status: "healthy",
            server: SERVER_ID
        }));

        return;
    }

    // Handle the default endpoint.
    res.writeHead(200);

    res.end(JSON.stringify({
        message: "Request successfully handled",
        server: SERVER_ID,
        port: PORT,
        timestamp: new Date().toISOString()
    }));
});

// Start listening for incoming requests.
server.listen(PORT, "127.0.0.1", () => {
    console.log(`${SERVER_ID} running on port ${PORT}`);
});