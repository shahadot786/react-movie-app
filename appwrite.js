import { Client, TablesDB, ID, Query, Permission, Role } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const VITE_APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
  .setEndpoint(VITE_APPWRITE_ENDPOINT)
  .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // List rows with query to find existing search term
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("searchTerm", searchTerm)],
    });

    // Check if result exists and has documents
    if (result && result.documents && result.documents.length > 0) {
      const doc = result.documents[0];

      await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: doc.$id,
        data: {
          count: doc.count + 1,
        },
      });
    } else {
      // If it doesn't exist, create a new row with permissions
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
        permissions: [
          Permission.read(Role.any()),
          Permission.update(Role.any()),
        ],
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    // Don't throw the error, just log it so the app continues working
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.limit(5), Query.orderDesc("count")],
    });

    return result?.rows || [];
  } catch (error) {
    console.error("Error getting trending movies:", error);
    return [];
  }
};
