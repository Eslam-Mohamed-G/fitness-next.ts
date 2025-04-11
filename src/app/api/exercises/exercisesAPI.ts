import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const options = {
            method: 'GET',
            url: 'https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises/muscle/chest',
            headers: {
                'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
                'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Server failed to fetch" }, { status: 500 });
    }
}
