// /components/demo/DemoBanner.jsx
import { config } from '../../lib/config';

export function DemoBanner() {
  if (!config.isDemoMode) return null;

  return (
    <div className="bg-yellow-100 border-b border-yellow-300 p-2 text-center">
      <p className="text-sm text-yellow-800">
        🎭 <strong>Demo Mode Active</strong> - All features are simulated for demonstration purposes
      </p>
    </div>
  );
}
