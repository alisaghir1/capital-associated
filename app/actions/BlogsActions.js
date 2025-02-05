import { databases } from "../utils/appwrite";

export async function getReservations() {
  try {
    const response = await databases.listDocuments(
      "6763f543000ea7b568f0", // Database ID
      "6763f578000ee46e6506"  // Collection ID
    );

    // Map documents to the Reservation interface
    const Blogs = response.documents.map((doc) => ({
      $id: doc.$id,
      $createdAt: doc.$createdAt,
      time: doc.time,
      date: doc.date,
    }));
    return Blogs;
  } catch (error) {
    console.error("Error fetching Blogs:", error);
    return []; // Return an empty array in case of an error
  }
}
