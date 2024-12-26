import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Briefcase, Loader2 } from "lucide-react";

interface ProjectFormData {
  title: string;
  category: string;
  description: string;
  images?: FileList;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

function ImageUpload({
  imagePreviews,
  fileNames,
  onFileUpload,
  errors,
}: {
  imagePreviews: string[];
  fileNames: string[];
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: any;
}) {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onFileUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />
      {errors.images && (
        <p className="mt-1 text-sm text-red-500">{errors.images.message}</p>
      )}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-full h-32 object-cover rounded-md shadow"
            />
            <p className="text-sm text-gray-600 mt-1 truncate">{fileNames[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Form() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ProjectFormData>();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/ims");
      if (!response.ok) throw new Error("Failed to fetch projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("description", data.description);

    if (data.images) {
      Array.from(data.images).forEach((file) => {
        formData.append("images", file);
      });
    }

    try {
      const response = await fetch("http://localhost:3000/ims", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Network response was not ok");
      alert("Project added successfully!");
      fetchProjects(); // Refresh the projects list
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (files.length > 3) {
      alert("Maximum 3 images allowed");
      return;
    }

    setValue("images", files);
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
    setFileNames(Array.from(files).map((file) => file.name));
  };

  useEffect(() => {
    return () => imagePreviews.forEach(URL.revokeObjectURL);
  }, [imagePreviews]);

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio Project</h1>
          <p className="text-lg text-gray-600">Showcase your amazing work</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className={inputClass}
                  placeholder="Enter project title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("category", { required: "Category is required" })}
                  className={inputClass}
                >
                  <option value="">Select category</option>
                  <option value="Lectures & Trainings">Lectures & Trainings</option>
                  <option value="Paint Inspection">Paint Inspection</option>
                  <option value="Major Projects">Major Projects</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", { required: "Description is required" })}
                className={`${inputClass} h-32 resize-none`}
                placeholder="Describe your project..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Project Images</label>
              <ImageUpload
                imagePreviews={imagePreviews}
                fileNames={fileNames}
                onFileUpload={handleFileUpload}
                errors={errors}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Add Project"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.category}</p>
                <p className="mt-2">{project.description}</p>
                {Array.isArray(project.images) && project.images.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {project.images.map((img, index) => (
                      <img
                        key={index}
                        src={`http://localhost:3000${img}`}
                        alt={`Project Image ${index + 1}`}
                        className="w-full h-20 object-cover rounded-md"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mt-2">No images available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
