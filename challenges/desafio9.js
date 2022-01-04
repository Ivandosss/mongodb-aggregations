db.trips.aggregate([
  {
    $match: {
      birthYear: { $not: { $eq: "" }, $exists: true },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: { _id: 0 },
  },
]);
