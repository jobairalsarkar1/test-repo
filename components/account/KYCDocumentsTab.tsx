import { Check, X, Download, File } from "lucide-react";

export function KYCDocumentsTab() {
  // Dummy data
  const verificationStatus = {
    status: "verified",
    verifiedVia: "Stripe Identity",
    approvedDate: "2024-01-15"
  };

  const documents = [
    {
      id: 1,
      name: "Passport (Front)",
      type: "passport",
      uploadDate: "2024-01-10",
      status: "verified"
    },
    {
      id: 2,
      name: "Passport (Back)",
      type: "passport",
      uploadDate: "2024-01-10",
      status: "verified"
    },
    {
      id: 3,
      name: "Driver's License",
      type: "license",
      uploadDate: "2024-01-12",
      status: "pending"
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyles = () => {
      switch (status) {
        case "verified":
          return "bg-green-100 text-green-800 border-green-200";
        case "pending":
          return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "rejected":
          return "bg-red-100 text-red-800 border-red-200";
        default:
          return "bg-gray-100 text-gray-800 border-gray-200";
      }
    };

    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };

  // Format date to Month Day, Year
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Verification Status */}
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-300">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Verification Status</h1>
        <div className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg ${
          verificationStatus.status === "verified" 
            ? "bg-green-50 border border-green-200" 
            : "bg-red-50 border border-red-200"
        }`}>
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${
            verificationStatus.status === "verified" ? "bg-green-100" : "bg-red-100"
          }`}>
            {verificationStatus.status === "verified" ? (
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            ) : (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            )}
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Identity Verified</h3>
            <p className="text-sm text-gray-600">via {verificationStatus.verifiedVia}</p>
            <p className="text-sm text-gray-500">
              Approved: {formatDate(verificationStatus.approvedDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Documents */}
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-300">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Uploaded Documents</h1>
        <div className="space-y-3 sm:space-y-4">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-3 sm:gap-4"
            >
              {/* Left Side - File Info */}
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <File className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{document.name}</h3>
                  <p className="text-xs text-gray-500">
                    Uploaded: {formatDate(document.uploadDate)}
                  </p>
                </div>
              </div>

              {/* Right Side - Status & Download */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="shrink-0">
                  <StatusBadge status={document.status} />
                </div>
                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors shrink-0">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}