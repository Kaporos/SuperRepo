import mongoose from "mongoose";

export async function dbSetup() {
    await mongoose.connect(process.env.MONGODB_URI)
}

export interface ICat {
    name: string
}
export const Cat: mongoose.Model<ICat> = mongoose.models.Cat || mongoose.model("Cat", new mongoose.Schema<ICat>({
    name: {
        type: "String",
        unique: true,
        required: true,
        dropDups: true
    }
}))