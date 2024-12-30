import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

interface ProjectsGridProps {
  projects: Project[];
  isLoading: boolean;
}

export function ProjectsGrid({ projects, isLoading }: ProjectsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 aspect-video rounded-t-2xl" />
            <div className="p-6 bg-white rounded-b-2xl">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
              <div className="h-8 bg-gray-200 rounded mb-4" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          category={project.category}
          images={project.images.split(',')}
          createdAt={project.createdAt}
        />
      ))}
    </div>
  );
}