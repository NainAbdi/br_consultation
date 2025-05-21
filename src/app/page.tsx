import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Initial Consultation</h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="jobTitles" className="block text-sm font-medium mb-2">
              Job Titles
            </label>
            <textarea
              id="jobTitles"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Enter job titles..."
            />
          </div>

          <div>
            <label htmlFor="roles" className="block text-sm font-medium mb-2">
              Roles and Responsibilities
            </label>
            <textarea
              id="roles"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={6}
              placeholder="Enter roles and responsibilities..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
