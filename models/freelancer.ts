import mongoose, { Model, Schema, Document } from "mongoose";

type FreelancerType = Document & {
  username: string;
  name: string;
  role: string;
  email: string;
  overdue: number;
  currency: string;
};

const FreelancerSchema: Schema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: { type: String },
  role: { type: String },
  email: { type: String },
  overdue: { type: Number },
  currency: { type: String },
});

FreelancerSchema.pre("save", (next: any) => {
  const user: any = this;
  // if (!user.isModified("password")) return next();
  next();
});

const FreelancerModel: Model<FreelancerType> = mongoose.model<FreelancerType>(
  "Freelancer",
  FreelancerSchema
);
export { FreelancerModel, FreelancerType };
