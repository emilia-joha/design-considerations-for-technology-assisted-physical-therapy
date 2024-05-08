const patientDetails = [
  {
    id: "1",
    names: "Emilia Johansson",
    dateOfBirth: "1993-08-03",
  },
];

const exerciseSessions = [
  {
    id: "session1",
    patientId: "1",
    startTimestamp: "2023-12-01T12:00:00",
    endTimestamp: "2023-12-01T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-01T12:00:00",
        endTimestamp: "2023-12-01T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
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
  },
  {
    id: "session2",
    patientId: "1",
    startTimestamp: "2023-12-02T12:00:00",
    endTimestamp: "2023-12-02T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-02T12:00:00",
        endTimestamp: "2023-12-02T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "red",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "yellow",
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
              color: "red",
            },
            {
              jointName: "elbowLeft",
              color: "yellow",
            },
            {
              jointName: "handRight",
              color: "red",
            },
            {
              jointName: "handLeft",
              color: "yellow",
            },
            {
              jointName: "waist",
              color: "red",
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
  },
  {
    id: "session3",
    patientId: "1",
    startTimestamp: "2023-12-03T12:00:00",
    endTimestamp: "2023-12-03T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-03T12:00:00",
        endTimestamp: "2023-12-03T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "red",
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
              color: "red",
            },
            {
              jointName: "handLeft",
              color: "yellow",
            },
            {
              jointName: "waist",
              color: "red",
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
  },
  {
    id: "session4",
    patientId: "1",
    startTimestamp: "2023-12-04T12:00:00",
    endTimestamp: "2023-12-04T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-04T12:00:00",
        endTimestamp: "2023-12-04T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "green",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "green",
            },
            {
              jointName: "shoulderRight",
              color: "yellow",
            },
            {
              jointName: "shoulderLeft",
              color: "yellow",
            },
            {
              jointName: "elbowRight",
              color: "red",
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
              color: "yellow",
            },
            {
              jointName: "kneeLeft",
              color: "yellow",
            },
            {
              jointName: "ankleRight",
              color: "green",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
  {
    id: "session5",
    patientId: "1",
    startTimestamp: "2023-12-05T12:00:00",
    endTimestamp: "2023-12-05T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-05T12:00:00",
        endTimestamp: "2023-12-05T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "yellow",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "red",
            },
            {
              jointName: "shoulderRight",
              color: "yellow",
            },
            {
              jointName: "shoulderLeft",
              color: "yellow",
            },
            {
              jointName: "elbowRight",
              color: "red",
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
              color: "yellow",
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
              color: "yellow",
            },
            {
              jointName: "kneeLeft",
              color: "yellow",
            },
            {
              jointName: "ankleRight",
              color: "green",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
  {
    id: "session6",
    patientId: "1",
    startTimestamp: "2023-12-06T12:00:00",
    endTimestamp: "2023-12-06T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-06T12:00:00",
        endTimestamp: "2023-12-06T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "green",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "green",
            },
            {
              jointName: "shoulderRight",
              color: "green",
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
              color: "green",
            },
            {
              jointName: "handLeft",
              color: "yellow",
            },
            {
              jointName: "waist",
              color: "yellow",
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
              color: "green",
            },
            {
              jointName: "kneeLeft",
              color: "yellow",
            },
            {
              jointName: "ankleRight",
              color: "green",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
  {
    id: "session7",
    patientId: "1",
    startTimestamp: "2023-12-07T12:00:00",
    endTimestamp: "2023-12-07T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-07T12:00:00",
        endTimestamp: "2023-12-07T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "yellow",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "yellow",
            },
            {
              jointName: "shoulderRight",
              color: "green",
            },
            {
              jointName: "shoulderLeft",
              color: "yellow",
            },
            {
              jointName: "elbowRight",
              color: "red",
            },
            {
              jointName: "elbowLeft",
              color: "yellow",
            },
            {
              jointName: "handRight",
              color: "red",
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
              color: "yellow",
            },
            {
              jointName: "kneeLeft",
              color: "yellow",
            },
            {
              jointName: "ankleRight",
              color: "green",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
  {
    id: "session8",
    patientId: "1",
    startTimestamp: "2023-12-08T12:00:00",
    endTimestamp: "2023-12-08T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-08T12:00:00",
        endTimestamp: "2023-12-08T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "patient had an issue",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Good job!",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "yellow",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "red",
            },
            {
              jointName: "shoulderRight",
              color: "yellow",
            },
            {
              jointName: "shoulderLeft",
              color: "yellow",
            },
            {
              jointName: "elbowRight",
              color: "red",
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
              color: "yellow",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
  {
    id: "session9",
    patientId: "1",
    startTimestamp: "2023-12-09T12:00:00",
    endTimestamp: "2023-12-09T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-09T12:00:00",
        endTimestamp: "2023-12-09T12:30:00",
        type: "singleLeggedSquat",
        video: {
          videoId: "",
          blob: "",
          time: "",
        },
        notes: [
          {
            note: "Integer bibendum euismod est. Ut fermentum tincidunt hendrerit. Donec eu elementum sem. Nulla facilisi. Ut finibus ultricies auctor. Praesent eu leo egestas, eleifend dui porttitor, bibendum massa.",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Integer bibendum euismod jkdhflk lkjdfl est. Ut fermentum tincidunt hendrerit. Donec eu elementum sem. Nulla facilisi. Ut finibus ultricies auctor. Praesent eu leo egestas, eleifend dui porttitor, bibendum massa.",
            date: "2023-12-20T12:00:00",
          },
        ],
        performanceMetrics: {
          color: "green",
          perJointPerformance: [
            {
              jointName: "neck",
              color: "green",
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
              color: "green",
            },
            {
              jointName: "elbowLeft",
              color: "yellow",
            },
            {
              jointName: "handRight",
              color: "green",
            },
            {
              jointName: "handLeft",
              color: "yellow",
            },
            {
              jointName: "waist",
              color: "red",
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
              color: "green",
            },
            {
              jointName: "kneeLeft",
              color: "yellow",
            },
            {
              jointName: "ankleRight",
              color: "green",
            },
            {
              jointName: "ankleLeft",
              color: "yellow",
            },
          ],
        },
      },
    ],
  },
];

export default {
  patientDetails,
  exerciseSessions,
};
