import { FolderKanban, Wallet, ShieldCheck, Calendar, User, Mail, Phone, IdCard, Key, Flag, PauseCircle, PlayCircle, Send } from "lucide-react";

interface OverviewTabProps {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
    nid: string;
    userId: string;
    joinDate: string;
    walletBalance: number;
    totalProjects: number;
    kycStatus: string;
  };
}

function StatCard({ icon, title, value, bgColor }: { icon: React.ReactNode; title: string; value: string; bgColor: string; }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex flex-col items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function InfoField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string; }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
        {icon}
        {label}
      </label>
      <div className="bg-gray-100 rounded-lg px-4 py-3">
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void; }) {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors bg-gray-400 hover:bg-gray-500 text-white w-full"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function OverviewTab({ user }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FolderKanban className="w-6 h-6 text-blue-600" />}
          title="Total Projects"
          value={user.totalProjects.toString()}
          bgColor="bg-blue-50"
        />
        
        <StatCard
          icon={<Wallet className="w-6 h-6 text-green-600" />}
          title="Wallet Balance"
          value={`$${user.walletBalance.toFixed(2)}`}
          bgColor="bg-green-50"
        />
        
        <StatCard
          icon={<ShieldCheck className="w-6 h-6 text-purple-600" />}
          title="KYC Status"
          value={user.kycStatus.charAt(0).toUpperCase() + user.kycStatus.slice(1)}
          bgColor="bg-purple-50"
        />
        
        <StatCard
          icon={<Calendar className="w-6 h-6 text-orange-600" />}
          title="Member Since"
          value={new Date(user.joinDate).toLocaleDateString()}
          bgColor="bg-orange-50"
        />
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoField icon={<User className="w-5 h-5 text-gray-500" />} label="Full Name" value={user.name} />
          <InfoField icon={<User className="w-5 h-5 text-gray-500" />} label="Username" value={`@${user.username}`} />
          <InfoField icon={<Mail className="w-5 h-5 text-gray-500" />} label="Email" value={user.email} />
          <InfoField icon={<Phone className="w-5 h-5 text-gray-500" />} label="Phone Number" value={user.phone} />
          <InfoField icon={<IdCard className="w-5 h-5 text-gray-500" />} label="Government ID (NID)" value={user.nid} />
          <InfoField icon={<Key className="w-5 h-5 text-gray-500" />} label="User ID" value={user.userId} />
        </div>
      </div>

      {/* Admin Actions */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Admin Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionButton
            icon={<Flag className="w-6 h-6" />}
            label="Flag Account"
            onClick={() => console.log("Flag account")}
          />
          
          <ActionButton
            icon={<PauseCircle className="w-6 h-6" />}
            label="Suspend"
            onClick={() => console.log("Suspend user")}
          />
          
          <ActionButton
            icon={<PlayCircle className="w-6 h-6" />}
            label="Reactivate"
            onClick={() => console.log("Reactivate user")}
          />
          
          <ActionButton
            icon={<Send className="w-6 h-6" />}
            label="Send Email"
            onClick={() => console.log("Send email")}
          />
        </div>
      </div>
    </div>
  );
}