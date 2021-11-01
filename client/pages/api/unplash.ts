import { createApi } from "unsplash-js";

let unsplash;

export default async (req, res) => {
  if (!unsplash) {
    unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });
  }
  // const search_term = req.query.search ?? "";
  // unsplash.search.getPhotos({ query: search_term }).then((result) => {
  //   if (result.errors) {
  //     // handle error here
  //     console.log("error occurred: ", result.errors[0]);
  //   } else {
  //     const feed = result.response;

  //     // extract total and results array from response
  //     const { total, results } = feed;

  //     return res.status(200).json({
  //       results: results,
  //       length: results.length,
  //       total: total,
  //     });
  //   }
  // });
  unsplash.photos.getRandom().then((result) => {
    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    } else {
      const feed = result.response;

      return res.status(200).json({
        result: feed,
      });
    }
  });
};
