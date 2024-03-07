/**
 * @typedef {import('./datamodel.js').Patient} Patient
 */
/**
 * @typedef {import('./datamodel.js').ExerciseSession} ExerciseSession
 */

export default {
  /**
   * Gets the details of the patient
   * @param {!string} patientId
   * @returns {Promise<Patient>}
   */
  async getPatientDetails(patientId) {
    return {
      id: "1",
      names: "Emilia Johansson",
      dateOfBirth: "1993-08-03",
    };
  },

  /**
   * Gets all exercise sessions for one patient
   * @param {!string} patientId
   * @returns {<ExerciseSession>}
   */
  async getExerciseSessions(patientId) {
    return [
      {
        id: "session1",
        patientId: "1",
        startTimestamp: "2023-12-12T12:00:00",
        endTimestamp: "2023-12-12T12:30:00",
        exercises: [
          {
            id: "ex1",
            patientId: "1",
            startTimestamp: "2023-12-12T12:00:00",
            endTimestamp: "2023-12-12T12:30:00",
            type: "singleLeggedSquat",
            videoId: "video1",
            notes: "well done!",
            performanceMetrics: {
              color: "yellow",
              perJointPerformance: [
                {
                  jointName: "neck",
                  color: "red",
                },
                {
                  jointName: "shoulders",
                  color: "red",
                },
                {
                  jointName: "elbows",
                  color: "yellow",
                },
                {
                  jointName: "hands",
                  color: "yellow",
                },
                {
                  jointName: "waist",
                  color: "green",
                },
                {
                  jointName: "Hip",
                  color: "green",
                },
                {
                  jointName: "knees",
                  color: "red",
                },
                {
                  jointName: "ankle",
                  color: "red",
                },
                {
                  jointName: "feet",
                  color: "green",
                },
              ],
            },
          },
        ],
      },
      {
        id: "session2",
        patientId: "1",
        startTimestamp: "2023-12-21T12:00:00",
        endTimestamp: "2023-12-21T12:30:00",
        exercises: [
          {
            id: "ex2",
            patientId: "1",
            startTimestamp: "2023-12-21T12:00:00",
            endTimestamp: "2023-12-21T12:30:00",
            type: "singleLeggedSquat",
            videoId: "video2",
            notes: "patient had an issue",
            performanceMetrics: {
              color: "red",
              perJointPerformance: [
                {
                  jointName: "neck",
                  color: "red",
                },
                {
                  jointName: "shoulders",
                  color: "red",
                },
                {
                  jointName: "elbows",
                  color: "red",
                },
                {
                  jointName: "hands",
                  color: "red",
                },
                {
                  jointName: "waist",
                  color: "red",
                },
                {
                  jointName: "Hip",
                  color: "green",
                },
                {
                  jointName: "knees",
                  color: "red",
                },
                {
                  jointName: "ankle",
                  color: "red",
                },
                {
                  jointName: "feet",
                  color: "yellow",
                },
              ],
            },
          },
        ],
      },
    ];
  },
};
