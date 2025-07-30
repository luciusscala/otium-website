export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-300 text-lg">Loading Otium...</p>
      </div>
    </div>
  );
} 