import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️ Couldn't find .env file");
}

type Config = {
  port: number;
  db: string;
  api: {
    prefix: string;
  };
};

const config: Config = {
  port: parseInt(`${process.env.PORT || 8080}`, 10),
  db: process.env.MONGODB_URI as string,
  api: {
    prefix: "/api/v1",
  },
} as const;

export { config };
