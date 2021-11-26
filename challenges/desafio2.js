db.movies.aggregate([
  {
    $group: {
      _id: {
        titulo: "$title",
        avaliado: "$rated",
        notaIMDB: "$imdb.rating",
        votosIMDB: "$imdb.votes",
        ano: "$year",
      },
    },
  },
]);
