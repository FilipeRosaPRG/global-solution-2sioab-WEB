// useSchedule.js
import { useState } from 'react';

interface Schedule {
    date: string;
    time: string;
    type_exams: string;
}


const useSchedule = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const scheduleAppointment = async (schedule: Schedule) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("http://localhost:8000/schedule", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(schedule),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setLoading(false);
            return data;
        } catch (error: any) {
            setLoading(false);
            setError(error.message);
            return null;
        }
    };

    return { schedule: scheduleAppointment, loading, error };
};

export default useSchedule;
