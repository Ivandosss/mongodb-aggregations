const favoriteActors = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      countries: { $all: ["USA"] },
      "tomatoes.viewer.rating": { $gte: 3 },
      cast: { $in: favoriteActors },
    },
  },
  {
    $project: {
      _id: false,
      num_favs: { $size: { $setIntersection: [
        "$cast", favoriteActors] } },
      title: true,
      "tomatoes.viewer.rating": true,
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $project: {
      num_favs: false,
      tomatoes: false,
    },
  },
  { $skip: 24 },
  { $limit: 1 },
]);
