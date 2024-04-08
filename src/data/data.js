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
        videoId: "",
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
              jointName: "hip",
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
    startTimestamp: "2023-12-02T12:00:00",
    endTimestamp: "2023-12-02T12:30:00",
    exercises: [
      {
        id: "ex1",
        patientId: "1",
        startTimestamp: "2023-12-02T12:00:00",
        endTimestamp: "2023-12-02T12:30:00",
        type: "singleLeggedSquat",
        videoId: "",
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
              jointName: "hip",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "red",
            },
            {
              jointName: "elbows",
              color: "yellow",
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
              jointName: "hip",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "yellow",
            },
            {
              jointName: "elbows",
              color: "red",
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
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "yellow",
            },
            {
              jointName: "ankle",
              color: "green",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "yellow",
            },
            {
              jointName: "elbows",
              color: "red",
            },
            {
              jointName: "hands",
              color: "yellow",
            },
            {
              jointName: "waist",
              color: "yellow",
            },
            {
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "yellow",
            },
            {
              jointName: "ankle",
              color: "green",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "green",
            },
            {
              jointName: "elbows",
              color: "yellow",
            },
            {
              jointName: "hands",
              color: "green",
            },
            {
              jointName: "waist",
              color: "yellow",
            },
            {
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "green",
            },
            {
              jointName: "ankle",
              color: "green",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "green",
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
              color: "green",
            },
            {
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "yellow",
            },
            {
              jointName: "ankle",
              color: "green",
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
        videoId: "",
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
              jointName: "shoulders",
              color: "yellow",
            },
            {
              jointName: "elbows",
              color: "red",
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
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "red",
            },
            {
              jointName: "ankle",
              color: "yellow",
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
        videoId: "",
        notes: [
          {
            note: "Integer bibendum euismod est. Ut fermentum tincidunt hendrerit. Donec eu elementum sem. Nulla facilisi. Ut finibus ultricies auctor. Praesent eu leo egestas, eleifend dui porttitor, bibendum massa.",
            date: "2023-12-09T12:00:00",
          },
          {
            note: "Integer bibendum euismod est. Ut fermentum tincidunt hendrerit. Donec eu elementum sem. Nulla facilisi. Ut finibus ultricies auctor. Praesent eu leo egestas, eleifend dui porttitor, bibendum massa.",
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
              jointName: "shoulders",
              color: "red",
            },
            {
              jointName: "elbows",
              color: "green",
            },
            {
              jointName: "hands",
              color: "green",
            },
            {
              jointName: "waist",
              color: "red",
            },
            {
              jointName: "hip",
              color: "green",
            },
            {
              jointName: "knees",
              color: "green",
            },
            {
              jointName: "ankle",
              color: "green",
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

export default {
  patientDetails,
  exerciseSessions,
};
