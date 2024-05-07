// const { ObjectId } = require("mongodb");

// class LeagueService {
//   constructor() {}

//   async getLeagueById(id: string): Promise<League | null> {
//     try {
//       const _id = new ObjectId(id); // Ensure valid ObjectId format
//       const league = await this.db
//         .collection<League>("leagues")
//         .findOne({ _id });
//       return league;
//     } catch (error) {
//       console.error("Error getting league by ID:", error);
//       throw error; // Re-throw for controller to handle
//     }
//   }

//   async getLeaguesAll(): Promise<League[]> {
//     try {
//       const leagues = await this.db
//         .collection<League>("leagues")
//         .find()
//         .toArray();
//       return leagues;
//     } catch (error) {
//       console.error("Error getting all leagues:", error);
//       throw error; // Re-throw for controller to handle
//     }
//   }
// }

// export default LeagueService;
