import React, { useState } from "react";
import { Search, CheckCircle, XCircle, Loader } from "lucide-react";
import { getCertificate } from "../services/api";

export default function CertificateValidatePage() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [certificateData, setCertificateData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!certificateNumber.trim()) return;
    setLoading(true);
    setError(null);
    setCertificateData(null);
    try {
      const res = await getCertificate(certificateNumber);
      setCertificateData(res.data.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 py-12 px-4 relative overflow-hidden">
      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Certificate Verification
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Verify the authenticity of Rezime EdTech certificate
          </p>
        </div>

        {/* Search Form */}
        <div className=" p-8 mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Enter your certificate number"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
            >
              {loading ? (
                <Loader className="animate-spin" size={24} />
              ) : (
                <>
                  <Search size={20} className="mr-2" />
                  Verify Certificate
                </>
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {(certificateData || error) && (
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 mb-8">
            {error ? (
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                  <XCircle size={32} className="text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {error}
                </h3>
                <p className="text-slate-400 max-w-md">
                  The certificate number you provided could not be verified.
                  Please check the number and try again.
                </p>
              </div>
            ) : (
              certificateData && (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Valid Certificate
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                    {/* Intern Name */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">Intern Name</p>
                      <p className="text-white font-medium">
                        {certificateData.studentName}
                      </p>
                    </div>
                    {/* Intern Position */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">
                        Intern Position
                      </p>
                      <p className="text-white font-medium">
                        {certificateData.position}
                      </p>
                    </div>
                    {/* Issue Date */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">Issue Date</p>
                      <p className="text-white font-medium">
                        {new Date(
                          certificateData.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    {/* Starting Date */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">
                        Internship Start Date
                      </p>
                      <p className="text-white font-medium">
                        {new Date(
                          certificateData.internshipStartDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    {/* Ending Date */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">
                        Internship End Date
                      </p>
                      <p className="text-white font-medium">
                        {new Date(
                          certificateData.internshipEndDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    {/* Certificate Number */}
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-400 text-sm mb-1">
                        Certificate Number
                      </p>
                      <p className="text-white font-medium">
                        {certificateData.certificateId.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-400 text-sm bg-slate-800/50 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span>Secure Verification System</span>
          </div>
        </div>
      </div>
    </div>
  );
}
