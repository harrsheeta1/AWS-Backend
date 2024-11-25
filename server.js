const express = require("express");
const AWS = require("aws-sdk");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Configure AWS DynamoDB
AWS.config.update({
    region: "us-east-1", // Change to your AWS region
});
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "UserNames"; // Change to your DynamoDB table name

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API to get all names
app.get("/names", async (req, res) => {
    try {
        const params = {
            TableName: TABLE_NAME,
        };
        const data = await dynamoDB.scan(params).promise();
        res.json(data.Items);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// API to add a new name
app.post("/names", async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send("Name is required");
    }
    const params = {
        TableName: TABLE_NAME,
        Item: {
            id: Date.now().toString(),
            name,
        },
    };
    try {
        await dynamoDB.put(params).promise();
        res.status(200).send("Name added successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
