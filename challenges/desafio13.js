db.trips.aggregate([
  {
    $match: {
      $expr: {
        $and: [
          { $eq: [{ $dayOfMonth: "$startTime" }, 10] },
          { $eq: [{ $month: "$startTime" }, 3] },
          { $eq: [{ $year: "$startTime" }, 2016] },
        ],
      },
    },
  },
  {
    $group: {
      _id: null,
      duracaoMediaEmMinutos: {
        $avg: {
          $dateDiff: {
            startDate: "$startTime",
            endDate: "$stopTime",
            unit: "minute",
          },
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      duracaoMediaEmMinutos: { $ceil: "$duracaoMediaEmMinutos" },
    },
  },
]);
