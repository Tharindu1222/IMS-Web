import React from 'react';
import { ImagePlus } from 'lucide-react';
import { ImageUploadProps } from './types';

export function ImageUpload({ imagePreviews, fileNames, onFileUpload, errors }: ImageUploadProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <label 
          htmlFor="images" 
          className="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <ImagePlus className="w-10 h-10 text-blue-500 mb-3" />
              <p className="text-sm font-medium text-gray-700">
                Drop your images here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                or click to browse (max 3 images)
              </p>
            </div>
          </div>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={onFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {errors?.images && (
        <p className="text-sm text-red-500 mt-1">{errors.images.message}</p>
      )}

      {imagePreviews.length > 0 && (
        <div className="grid grid-cols-3 gap-6">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-md">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-medium truncate">
                    {fileNames[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}