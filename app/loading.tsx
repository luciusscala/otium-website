export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Otium</h2>
        <p className="text-white/60">Preparing your experience...</p>
      </div>
    </div>
  );
} 