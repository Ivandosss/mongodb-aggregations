db.movies.aggregate([
  {
    $match: {
      awards: {
        $regex: /Won.*.Oscar/i,
      },
    },
  },
  {
    $group: {
      _id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      media: { $avg: "$imdb.rating" },
      desvio: { $stdDevSamp: "$imdb.rating" },
    },
  },
  {
    $project: {
      _id: false,
      maior_rating: true,
      menor_rating: true,
      media_rating: { $round: ["$media", 1] },
      desvio_padrao: { $round: ["$desvio", 1] },
    },
  },
]);
