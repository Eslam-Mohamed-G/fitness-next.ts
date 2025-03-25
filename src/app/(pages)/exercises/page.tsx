// ✅ ده سيرفر كومبوننت افتراضي
import axios from "axios";

const getExercises = async () => {
    const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        params: { limit: "10", offset: "0" },
        headers: {
            "x-rapidapi-key": "6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch exercises:", error);
        return [];
    }
};

export default async function ExercisesPage() {
    const exercises = await getExercises(); // ✅ جلب البيانات على السيرفر

    return (
        <div>
            <h1>Exercises</h1>
            <ul>
                {exercises.map((exercise: any, index: number) => (
                    <li key={index}>{exercise.name}</li>
                ))}
            </ul>
        </div>
    );
}
