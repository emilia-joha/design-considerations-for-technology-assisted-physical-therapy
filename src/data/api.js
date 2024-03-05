/**
 * @typedef {import('./datamodel.js').Patient} Patient
 */

/**
 * @typedef {import('./datamodel.js').ExerciseSession} ExerciseSession
 */

let API = {

    /**
     * Gets the details of the patient
     * @param {!string} patientId 
     * @returns {Promise<Patient>}
     */
    async getPatientDetails (patientId) {
        return {
            id: 'fakep',
            names: 'Dario Salvi',
            dateOfBirth: '1966-12-12'
        }
    },

    /**
     * Gets all exercise sessions for one patient
     * @param {!string} patientId 
     * @returns {Promise<ExerciseSession>}
     */
    async getExerciseSessions (patientId) {
        return [
            {
                id: 'session1',
                patientId: 'fakep',
                startTimestamp: '2023-12-12T12:00:00',
                endTimestamp: '2023-12-12T12:30:00',
                exercises: [
                    {
                        id: 'ex1',
                        patientId: 'fakep',
                        startTimestamp: '2023-12-12T12:00:00',
                        endTimestamp: '2023-12-12T12:30:00',
                        type: 'singleLeggedSquat',
                        videoId: 'video1',
                        notes: 'well done!',
                        performanceMetrics: {
                            color: 'yellow',
                            perJointPerformance: [
                                {
                                    jointName: 'neck',
                                    color: 'red'
                                },
                                {
                                    jointName: 'ankle',
                                    color: 'green'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                id: 'session2',
                patientId: 'fakep',
                startTimestamp: '2023-12-21T12:00:00',
                endTimestamp: '2023-12-21T12:30:00',
                exercises: [
                    {
                        id: 'ex2',
                        patientId: 'fakep',
                        startTimestamp: '2023-12-21T12:00:00',
                        endTimestamp: '2023-12-21T12:30:00',
                        type: 'singleLeggedSquat',
                        videoId: 'video2',
                        notes: 'patient had an issue',
                        performanceMetrics: {
                            color: 'red',
                            perJointPerformance: [
                                {
                                    jointName: 'neck',
                                    color: 'red'
                                },
                                {
                                    jointName: 'ankle',
                                    color: 'red'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
}

