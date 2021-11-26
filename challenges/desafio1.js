db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $ne: ["Crime", "Horror"] },
      rated: { $in: ["PG", "G"] },
      languages: { $eq: ["English", "Spanish"] },
    },
  },
]);
