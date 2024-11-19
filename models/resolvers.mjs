
const resolvers = {
    Query: {
      getAnimes: async () => await Anime.find(),
      getAnime: async (_, { id }) => await Anime.findById(id),
    },
    Mutation: {
      addAnime: async (_, { title, startDate, endDate, averageScore }) => {
        const anime = new Anime({ title, startDate, endDate, averageScore });
        await anime.save();
        return anime;
      },
      updateAnime: async (_, { id, title, startDate, endDate, averageScore }) => {
        return await Anime.findByIdAndUpdate(id, { title, startDate, endDate, averageScore }, { new: true });
      }
    },
};

export default resolvers;