import mongoose from 'mongoose';

export interface IContactEmail extends mongoose.Document {
  name: string;
  subject: string;
 fro: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const contactEmailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
 fro: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.ContactEmail || mongoose.model<IContactEmail>('ContactEmail', contactEmailSchema);
