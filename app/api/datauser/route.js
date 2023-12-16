import connect from "@/utils/db";
import DataUser from "../../../models/DataUser";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import multer from "multer";
import { GridFSBucket } from "mongodb";
import { Readable } from "stream";

const upload = multer({
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: function (req, file, cb) {
    const allowedMimetypes = ["image/jpeg", "image/png", "application/pdf"];
    if (allowedMimetypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
});

export async function POST(request) {
  try {
    const {
      name,
      email,
      lokasigunung,
      kertas,
      plastik,
      kaleng,
      tanggalNaik,
      tanggalTurun,
      totalPoin,
    } = await request.json();

    await connect();

    // Check if the user already exists
    const existingUser = await DataUser.findOne({ email });

    if (existingUser) {
      // Update existing user data
      existingUser.name = name;
      existingUser.lokasigunung = lokasigunung;
      existingUser.kertas = kertas;
      existingUser.plastik = plastik;
      existingUser.kaleng = kaleng;
      existingUser.tanggalNaik = tanggalNaik;
      existingUser.tanggalTurun = tanggalTurun;

      // Store the file in MongoDB using GridFS
      if (request.files && request.files.length > 0) {
        for (const file of request.files) {
          if (file.fieldname === "buktiSampah") {
            existingUser.buktiSampah.push(await saveFileToGridFS(file));
          } else if (file.fieldname === "buktiRegistrasi") {
            existingUser.buktiRegistrasi.push(await saveFileToGridFS(file));
          }
        }
      }

      // Add the new points to the existing total points
      existingUser.totalPoin += totalPoin;

      // Save the updated user data
      const updatedUser = await existingUser.save();

      return NextResponse.json(
        { message: "Data Updated", data: updatedUser },
        { status: 200 }
      );
    }

    // If user does not exist, create a new user
    const newDataUser = new DataUser({
      name,
      email,
      lokasigunung,
      kertas,
      plastik,
      kaleng,
      tanggalNaik,
      tanggalTurun,
      status: "pending",
      totalPoin,
    });

    // Store the file in MongoDB using GridFS
    if (request.files && request.files.length > 0) {
      for (const file of request.files) {
        if (file.fieldname === "buktiSampah") {
          const fileId = await saveFileToGridFS(file);
          newDataUser.buktiSampah = fileId;
        } else if (file.fieldname === "buktiRegistrasi") {
          const fileId = await saveFileToGridFS(file);
          newDataUser.buktiRegistrasi = fileId;
        }
      }
    }

    // Save the new user data
    const savedDataUser = await newDataUser.save();

    return NextResponse.json(
      { message: "Data Created", data: savedDataUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    if (error instanceof multer.MulterError) {
      return NextResponse.error(
        new Error(`File upload error: ${error.message}`),
        { status: 500 }
      );
    } else if (error.message.includes("duplicate key")) {
      return NextResponse.error(new Error("Email already exists"), {
        status: 400,
      });
    } else {
      return NextResponse.error(new Error("Internal server error"), {
        status: 500,
      });
    }
  }
}

async function saveFileToGridFS(file) {
  const client = await connect();

  try {
    const db = client.db();
    const bucket = new GridFSBucket(db);

    const uploadStream = bucket.openUploadStream("file");

    console.log(`Uploading file: ${file.fieldname}`);

    await new Promise((resolve, reject) => {
      stream
        .pipe(uploadStream)
        .on("error", (error) => {
          console.error(`Error uploading file: ${error.message}`);
          reject(error);
        })
        .on("finish", () => {
          console.log(`File uploaded successfully: ${file.fieldname}`);
          resolve(uploadStream.id);
        });
    });

    return uploadStream.id;
  } finally {
    await client.close(); // Close the connection after use
  }
}
