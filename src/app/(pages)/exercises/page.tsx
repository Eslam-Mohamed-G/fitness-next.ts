"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ExercisesPage() {
    const [exercises, setExercises] = useState<any[]>([]);

    useEffect(() => {
        const getExercises = async () => {
            try {
                const response = await axios.get("/api/exercises");
                setExercises(response.data);
            } catch (error) {
                console.error("Failed to fetch exercises:", error);
            }
        };
    
        getExercises();
    }, []);

    return (
        <div>
            <h1>Exercises</h1>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>{exercise.name}</li>
                ))}
            </ul>
        </div>
    );
}
