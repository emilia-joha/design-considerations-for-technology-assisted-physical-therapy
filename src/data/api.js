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

  async changeVideoId(patientId, startTimestamp, str) {
    const exerciseSessions = data.exerciseSessions.filter(
      (x) => x.patientId === patientId
    );

    for (const session of exerciseSessions) {
      for (const exercise of session.exercises) {
        if (exercise.startTimestamp == startTimestamp) {
          exercise.video.videoId = str;
          exercise.video.blob = str;
          exercise.video.time = str;
          return;
        }
      }
    }
  },
  async addNote(patientId, startTimestamp, note) {
    const exerciseSessions = data.exerciseSessions.filter(
      (x) => x.patientId === patientId
    );

    for (const session of exerciseSessions) {
      for (const exercise of session.exercises) {
        if (exercise.startTimestamp == startTimestamp) {
          exercise.notes.push(note);
          return;
        }
      }
    }
  },
  async deleteNote(patientId, startTimestamp, text) {
    const exerciseSessions = data.exerciseSessions.filter(
      (x) => x.patientId === patientId
    );

    for (const session of exerciseSessions) {
      for (const exercise of session.exercises) {
        if (exercise.startTimestamp == startTimestamp) {
          for (const n of exercise.notes) {
            if (n.note === text.note && n.date.slice(0, 10) === text.date) {
              const i = exercise.notes.findIndex((n) => n.note === text.note);
              exercise.notes.splice(i, 1);
            }
          }
          return;
        }
      }
    }
  },
  async postExerciseSession(id, video, date, time) {
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
          video: {
            videoId: "1",
            blob: video,
            time: time,
          },
          notes: [],
          performanceMetrics: {
            color: "yellow",
            perJointPerformance: [
              {
                jointName: "neck",
                color: "red",
              },
              {
                jointName: "shoulderRight",
                color: "red",
              },
              {
                jointName: "shoulderLeft",
                color: "yellow",
              },
              {
                jointName: "elbowRight",
                color: "yellow",
              },
              {
                jointName: "elbowLeft",
                color: "yellow",
              },
              {
                jointName: "handRight",
                color: "yellow",
              },
              {
                jointName: "handLeft",
                color: "yellow",
              },
              {
                jointName: "waist",
                color: "green",
              },
              {
                jointName: "hipRight",
                color: "green",
              },
              {
                jointName: "hipLeft",
                color: "yellow",
              },
              {
                jointName: "kneeRight",
                color: "red",
              },
              {
                jointName: "kneeLeft",
                color: "yellow",
              },
              {
                jointName: "ankleRight",
                color: "red",
              },
              {
                jointName: "ankleLeft",
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
