import data from "@/data/data.js";

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
    const patient = data.patientDetails.find(({ id }) => id === patientId);
    return patient;
  },

  /**
   * Gets all exercise sessions for one patient
   * @param {!string} patientId
   * @returns {Promise<ExerciseSession>}
   */
  async getExerciseSessions(id) {
    const exercise = data.exerciseSessions.filter(
      ({ patientId }) => patientId === id
    );
    return exercise;
  },

  async postExerciseSession(id, video, date) {
    const sessionId = data.exerciseSessions
      .filter(({ patientId }) => patientId === id)
      .pop()
      .id.slice(7);

    const newExercise = {
      id: "session" + (Number(sessionId) + 1),
      patientId: "1",
      startTimestamp: date,
      endTimestamp: date,
      exercises: [
        {
          id: "ex1",
          patientId: "1",
          startTimestamp: date,
          endTimestamp: date,
          type: "singleLeggedSquat",
          videoId: video,
          notes: "",
          performanceMetrics: {
            color: "green",
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
    };
    data.exerciseSessions.push(newExercise);
  },
};
