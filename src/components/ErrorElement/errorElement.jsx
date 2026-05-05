import { useNavigate } from 'react-router';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">

            {/* Big 404 */}
            <h1 className="text-[120px] sm:text-[160px] font-bold text-[#244D3F] leading-none select-none">
                404
            </h1>

            {/* Message */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
                Page not found
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-sm">
                Looks like this connection doesn't exist. The page you're looking for may have been moved or deleted.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
                <button
                    onClick={() => navigate(-1)}
                    className="border border-gray-200 text-gray-600 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all"
                >
                    Go Back
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="bg-[#244D3F] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1a3a2e] transition-all"
                >
                    Back to Home
                </button>
            </div>

        </div>
    );
}