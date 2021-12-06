db.trips.aggregate([
  {
    $match: { $and: [{ birthYear: { $ne: null } },
      { birthYear: { $ne: "" } }],
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoDeNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoDeNascimento: { $min: "$birthYear" },
    },
  },
  {
    $project: {
      _id: 0,
      maiorAnoDeNascimento: 1,
      menorAnoDeNascimento: { $toInt: "$menorAnoDeNascimento" },
    },
  },
]);
