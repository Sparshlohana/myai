import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { DiscussServiceClient } from "@google-ai/generativelanguage";


export async function GET(req) {
    try {
        const MODEL_NAME = "models/chat-bison-001";
        const API_KEY = process.env.PALM_AI_API_KEY;
        const client = new DiscussServiceClient({
            authClient: new GoogleAuth().fromAPIKey(API_KEY),
        });
        let response = "";
        const result = await client.generateMessage({
            model: MODEL_NAME, // Required. The model to use to generate the result.
            temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result.
            candidateCount: 1, // Optional. The number of candidate results to generate.
            prompt: {
                // Required. Alternating prompt/response messages.
                messages: [{ content: "What is your age?" }],
            },
        });

        console.log(result[0].candidates[0].content);
        response = result[0].candidates[0].content;

        return NextResponse.json({ response });
    } catch (error) {
        console.log(error.message);
        NextResponse.json({ error: error.message });
    }
}