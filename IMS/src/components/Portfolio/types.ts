import { Key } from "react";

export interface Project {
  _id: Key | null | undefined;
  createdAt: string | undefined;
  images: any;

  id: number;

  title: string;

  description: string;

  category: string;

  // Add other fields as necessary

}
export interface ProjectFormData {
  title: string;
  description: string;
  category: string;
  images: FileList | null;
}

export interface ImageUploadProps {
  imagePreviews: string[];
  fileNames: string[];
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: any;
}