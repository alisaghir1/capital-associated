import { databases } from "../utils/appwrite";

export const getAllBlogs = async () => {
  try {
    const response = await databases.listDocuments(
      "YOUR_DATABASE_ID",
      "YOUR_COLLECTION_ID"
    );
    console.log("All blogs:", response.documents);
    return response.documents; // Returns an array of blog posts
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogById = async (blogId) => {
  try {
    const response = await databases.getDocument(
      "YOUR_DATABASE_ID",
      "YOUR_COLLECTION_ID",
      blogId
    );
    console.log("Blog post:", response);
    return response; // Returns the specific blog post object
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};