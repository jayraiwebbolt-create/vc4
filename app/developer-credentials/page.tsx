export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Crafted with Precision
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-6 rounded-full"></div>

        {/* Main Message */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          This website is professionally designed and developed by
        </p>

        {/* Name Highlight */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
          Aayush Bajpai
        </h2>

        {/* Website Link */}
        <a
          href="https://www.aayushbajpai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 transition duration-300 text-lg font-medium"
        >
          www.aayushbajpai.com
        </a>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </main>
  );
}
