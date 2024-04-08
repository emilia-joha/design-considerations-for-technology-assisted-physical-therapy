/**
 * @typedef {Object} Patient
 * @property {!string} id - unique identifier
 * @property {!string} names - first and second (ort htird, fourth etc.) names
 * @property {!string} dateOfBirth - date of birth, format "yyyy-MM-DD"
 */

/**
 * @typedef {Object} JointPerformanceMetric
 * @property {!string} color - can be red, green or yellow
 * @property {!string} jointName - 'neck', 'shoulders', 'elbows', 'hands', 'waist', 'knees', 'ankle', 'feet'
 */

/**
 * @typedef {Object} SingleLeggedSquatPerformanceMetrics
 * @property {!string} color - traffic light for all the exercise, can be
 * @property {Array<JointPerformanceMetric>} perJointPerformance - array of traffic lights per each joint
 */

/**
 * @typedef {Object} Exercise
 * @property {!string} id - unique identifier
 * @property {!string} patientId - unique identifier of the patient
 * @property {string} startTimestamp - ISO 8601 date and time
 * @property {string} endTimestamp - ISO 8601 date and time
 * @property {!string} type - type of exercise, can be "singleLeggedSquat"
 * @property {?string} videoId - id of the video associated with the exercise
 * @property {?SingleLeggedSquatPerformanceMetrics} performanceMetrics - object containing metrics about the quality of the exercise
 * @property {?Array<Notes>} notes
 */
/**
 * @typedef {Object} Notes
 * @property {string} note - notes about the exercise
 * @property {string} date - ISO 8601 date and time
 */

/**
 * @typedef {Object} ExerciseSession
 * @property {!string} id - unique identifier
 * @property {!string} patientId - unique identifier of the patient
 * @property {string} startTimestamp - ISO 8601 date and time
 * @property {string} endTimestamp - ISO 8601 date and time
 * @property {Array<Exercise>} exercises - array of exercises
 */
