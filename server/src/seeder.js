import dotenv from 'dotenv';
// import connectDB from "./config/db.js";  // Import your database connection
import connectDB from "./config/db.js";

import { OwnerSeeder } from "./seeder/owner.seeder.js";

async function runSeeder() {
  try {
    // Connect to the database
dotenv.config({path:'./.env.local'});
    await connectDB();

    // Run the owner seeder
    await OwnerSeeder();
    console.log("Owner seeding completed");
  } catch (error) {
    console.error("Error running the seeder:", error);
  } finally {
    process.exit(0); // Close the process
  }
}

runSeeder();