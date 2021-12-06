db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: "$startTime" }, count: { $sum: 1 },
    },
  },
  {
    $sort: { count: -1 },
  },
  {
    limit: 1,
  },
  {
    $project: {
      diaSemana: "$_id",
      total: "$count",
      _id: 0,
    },
  },
]);
