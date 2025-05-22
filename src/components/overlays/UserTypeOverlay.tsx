'use client';

interface UserTypeOverlayProps {
  onSelect: (type: 'new' | 'existing') => void;
}

const UserTypeOverlay = ({ onSelect }: UserTypeOverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome</h2>
        <div className="space-y-4">
          <button 
            onClick={() => onSelect('new')}
            className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            New User
          </button>
          <button 
            onClick={() => onSelect('existing')}
            className="w-full p-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Existing User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypeOverlay; 