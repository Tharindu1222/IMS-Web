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