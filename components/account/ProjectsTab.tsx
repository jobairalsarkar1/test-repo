import { Users } from "lucide-react";

export function ProjectsTab() {
  // Dummy projects data
  const projects = [
    {
      id: 1,
      name: "E-commerce Mobile App",
      status: "active",
      creator: "John Designer",
      totalEarnings: 12500,
      collaborators: 3,
    },
    {
      id: 2,
      name: "Healthcare Dashboard",
      status: "completed",
      creator: "Sarah Developer",
      totalEarnings: 8500,
      collaborators: 5,
    },
    {
      id: 3,
      name: "FinTech Analytics",
      status: "active",
      creator: "Mike Analyst",
      totalEarnings: 15200,
      collaborators: 2,
    },
    {
      id: 4,
      name: "Education Platform",
      status: "paused",
      creator: "Emma Educator",
      totalEarnings: 6800,
      collaborators: 4,
    },
    {
      id: 5,
      name: "Social Media Tool",
      status: "active",
      creator: "Alex Creator",
      totalEarnings: 21000,
      collaborators: 6,
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "active":
          return "bg-blue-100 text-blue-800 border-blue-200";
        case "completed":
          return "bg-green-100 text-green-800 border-green-200";
        case "paused":
          return "bg-yellow-100 text-yellow-800 border-yellow-200";
        default:
          return "bg-gray-100 text-gray-800 border-gray-200";
      }
    };

    return (
      <div
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };

  // Creator badge component
  const CreatorBadge = ({ creator }: { creator: string }) => (
    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 border border-violet-200">
      {creator}
    </div>
  );

  return (
    <div className="space-y-6 bg-white p-4 sm:p-6 rounded-lg border border-gray-300">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Projects</h2>

      <div className="space-y-3 sm:space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              {/* Left Side - Project Info */}
              <div className="space-y-2 flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                  {project.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={project.status} />
                  <CreatorBadge creator={project.creator} />
                </div>
                
                {/* Collaborators - Mobile Only */}
                <div className="flex items-center gap-1 text-gray-600 sm:hidden">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {project.collaborators} collaborators
                  </span>
                </div>
              </div>

              {/* Right Side - Earnings & Collaborators */}
              <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end sm:gap-2 sm:text-right">
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm text-gray-500">Total Earnings</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">
                    ${project.totalEarnings.toLocaleString()}
                  </p>
                </div>
                
                {/* Collaborators - Desktop Only */}
                <div className="hidden sm:flex items-center gap-1 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {project.collaborators} collaborators
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}