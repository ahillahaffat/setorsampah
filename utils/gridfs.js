import { GridFSBucket } from "mongodb";
import connect from "@/utils/db";
import { Readable } from "stream";

export async function saveFileToGridFS(file) {
  const client = await connect();

  try {
    const db = client.db();
    const bucket = new GridFSBucket(db);

    const uploadStream = bucket.openUploadStream(file.originalname);

    console.log(`Uploading file: ${file.originalname}`);

    // Use file.buffer to create a readable stream
    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);

    await new Promise((resolve, reject) => {
      readableStream
        .pipe(uploadStream)
        .on("error", (error) => {
          console.error(`Error uploading file: ${file.originalname}`, error);
          reject(error);
        })
        .on("finish", () => {
          console.log(`File uploaded successfully: ${file.originalname}`);
          resolve(uploadStream.id);
        });
    });

    return uploadStream.id;
  } finally {
    await client.close(); // Close the connection after use
  }
}
