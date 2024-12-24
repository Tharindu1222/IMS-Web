import mongoose, { Schema, Document } from 'mongoose';

// Define Ims schema for MongoDB using Mongoose
export const ImsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  
  category: { type: String, required: true },
 
  images: { type: String, required: false }, // Store image URLs as a JSON string or comma-separated string
});

// Create the model (this was missing previously)
export const ImsModel = mongoose.model('Ims', ImsSchema);

// Export the interface for TypeScript
export interface Ims extends Document {
  title: string;
  description: string;
 
  category: string;
 
  images?: string;
}
