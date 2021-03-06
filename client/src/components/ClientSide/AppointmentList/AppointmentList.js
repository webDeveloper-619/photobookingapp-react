import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../../utils/UserContext";
import API from '../../../utils/API';

export function AppointmentList() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    const [appointmentList, setAppointmentList] = useState([])

    useEffect(() => {
        API.getDashboardData(userId)
            .then(res => setAppointmentList(res.data))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {!appointmentList ? <h2>No upcoming appointments</h2> : appointmentList.map((appointment) => (
                <ul>
                    <li key={appointment._id}>{appointment.street}</li>
                </ul>
            ))}
        </div>
    )
}

