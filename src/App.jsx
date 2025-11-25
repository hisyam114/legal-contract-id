import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Briefcase, 
  FileText, 
  CheckCircle, 
  Users, 
  ArrowRight, 
  Menu, 
  X, 
  MessageCircle, 
  Search, 
  Star,
  Globe,
  Award,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Lock,
  Clock,
  Zap,
  BookOpen,
  PieChart,
  LogOut,
  User,
  AlertCircle,
  LayoutGrid,
  FileCheck,
  PenTool,
  Building,
  Scale,
  ChevronRight,
  List,
  FolderOpen,
  Info,
  HelpCircle
} from 'lucide-react';

// ==========================================
// COMPONENT: ServiceDetailModal
// File: src/components/ServiceDetailModal.jsx
// ==========================================
const ServiceDetailModal = ({ service, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        {/* Modal Panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          
          {/* Header */}
          <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-bold text-white" id="modal-title">
                {service.name}
              </h3>
              <p className="text-sm text-blue-100 mt-1">
                {service.price}
              </p>
            </div>
            <button 
              type="button" 
              className="bg-blue-700 rounded-full p-1 hover:bg-blue-800 text-white focus:outline-none"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 flex space-x-6">
            {[
              { id: 'overview', label: 'Ringkasan', icon: <Info className="h-4 w-4" /> },
              { id: 'requirements', label: 'Syarat (Terms)', icon: <List className="h-4 w-4" /> },
              { id: 'documents', label: 'Dokumen', icon: <FolderOpen className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-2 border-b-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="px-6 py-6 min-h-[300px]">
            {activeTab === 'overview' && (
              <div className="animate-in fade-in duration-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Tentang Layanan Ini</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Layanan ini mencakup seluruh proses legalitas yang diperlukan agar bisnis Anda dapat beroperasi secara sah di mata hukum Indonesia. Tim ahli kami akan mendampingi Anda dari awal hingga dokumen terbit.
                </p>
                <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-blue-900">Jaminan Kepastian Hukum</h5>
                      <p className="text-xs text-blue-700 mt-1">Dokumen diproses oleh Notaris terpercaya dan sesuai peraturan perundang-undangan yang berlaku.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="animate-in fade-in duration-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Syarat & Ketentuan</h4>
                {service.requirements && service.requirements.length > 0 ? (
                  <ul className="space-y-3">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-blue-600">{idx + 1}</span>
                        </div>
                        {req}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 italic">Tidak ada syarat khusus atau hubungi kami untuk detail lebih lanjut.</p>
                )}
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="animate-in fade-in duration-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h4>
                {service.documents && service.documents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <FileText className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-sm text-gray-700 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 italic">Dokumen akan diinformasikan lebih lanjut oleh konsultan kami.</p>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => alert("Fitur pemesanan akan segera tersedia!")}
            >
              Pesan Sekarang
            </button>
            <button 
              type="button" 
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT: Navbar
// File: src/components/Navbar.jsx
// ==========================================
const Navbar = ({ activeView, setActiveView, isScrolled, isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (view) => {
    setActiveView(view);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer z-50" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-blue-600 p-2 rounded-lg mr-2">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-tight ${isScrolled || activeView !== 'home' ? 'text-gray-900' : 'text-white'}`}>
                Legal Contract
              </span>
              <span className={`text-xs font-medium tracking-wider ${isScrolled || activeView !== 'home' ? 'text-blue-600' : 'text-blue-200'}`}>
                INDONESIA
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeView === 'home' 
                  ? 'text-blue-600 font-semibold' 
                  : (isScrolled || activeView !== 'home' ? 'text-gray-700' : 'text-white/90 hover:text-white')
              }`}
            >
              Home
            </button>

            <div 
              className="relative group h-16 flex items-center"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeView === 'services' || activeView === 'all_services' || activeDropdown === 'services'
                    ? 'text-blue-600 font-semibold' 
                    : (isScrolled || activeView !== 'home' ? 'text-gray-700' : 'text-white/90 hover:text-white')
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl mt-2 p-0 border border-gray-100 transition-all duration-200 animate-in fade-in slide-in-from-top-2 z-50 overflow-hidden">
                  <div className="p-6 grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Business Solutions</h3>
                      
                      <div onClick={() => handleNavClick('services')} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors">
                            <Briefcase className="h-5 w-5 text-blue-600 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-blue-700">Pendirian PT / CV</p>
                          <p className="text-xs text-gray-500">Mulai bisnis legal Anda sekarang</p>
                        </div>
                      </div>

                      <div onClick={() => handleNavClick('services')} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3 group-hover:bg-purple-600 transition-colors">
                            <Award className="h-5 w-5 text-purple-600 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-purple-700">Daftar Merek (HAKI)</p>
                          <p className="text-xs text-gray-500">Lindungi brand bisnis Anda</p>
                        </div>
                      </div>

                      <div onClick={() => handleNavClick('services')} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="bg-green-100 p-2 rounded-lg mr-3 group-hover:bg-green-600 transition-colors">
                            <FileText className="h-5 w-5 text-green-600 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-green-700">Contract Drafting</p>
                          <p className="text-xs text-gray-500">Buat perjanjian bisnis aman</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white flex flex-col justify-end relative overflow-hidden group cursor-pointer" onClick={() => handleNavClick('services')}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <Shield className="w-32 h-32" />
                      </div>
                      <div className="relative z-10">
                        <span className="bg-yellow-400 text-blue-900 text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">SPECIAL PROMO</span>
                        <h4 className="font-bold text-lg leading-tight mb-1">Paket Pendirian PT Kilat</h4>
                        <p className="text-xs text-blue-100 mb-3">Diskon 20% + Bonus Virtual Office 1 Tahun.</p>
                        <button className="text-xs bg-white text-blue-600 px-3 py-2 rounded-lg font-bold w-full hover:bg-gray-100">Claim Offer</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => handleNavClick('all_services')}>
                    <span className="text-sm font-bold text-blue-600 flex items-center justify-center">
                      View All Services <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="relative group h-16 flex items-center"
              onMouseEnter={() => setActiveDropdown('articles')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('articles')}
                className={`flex items-center text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeView === 'articles' || activeDropdown === 'articles'
                    ? 'text-blue-600 font-semibold' 
                    : (isScrolled || activeView !== 'home' ? 'text-gray-700' : 'text-white/90 hover:text-white')
                }`}
              >
                Articles <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === 'articles' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl mt-2 p-6 grid grid-cols-2 gap-6 border border-gray-100 transition-all duration-200 animate-in fade-in slide-in-from-top-2 z-50">
                  <div className="space-y-2">
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</h3>
                     {['Business Guide', 'Tax & Compliance', 'Intellectual Property', 'Startups'].map((cat) => (
                       <div key={cat} onClick={() => handleNavClick('articles')} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
                          <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600">{cat}</span>
                          <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500" />
                       </div>
                     ))}
                     <div className="pt-2 mt-2 border-t border-gray-100">
                        <button onClick={() => handleNavClick('articles')} className="text-xs font-bold text-blue-600 flex items-center hover:underline">
                           View All Articles <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                     </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleNavClick('articles')}>
                    <div className="h-24 bg-blue-200 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                       <BookOpen className="text-white h-8 w-8 relative z-10" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase">New Release</span>
                    <h4 className="font-bold text-sm text-gray-900 mt-1 mb-1">UU Cipta Kerja Terbaru</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">Pahami dampak regulasi terbaru terhadap bisnis UMKM Anda di tahun 2024.</p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeView === 'contact' 
                  ? 'text-blue-600 font-semibold' 
                  : (isScrolled || activeView !== 'home' ? 'text-gray-700' : 'text-white/90 hover:text-white')
              }`}
            >
              Contact
            </button>

            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all shadow-md"
                title="Sign Out"
              >
                <span className="mr-2">Sign Out</span>
                <LogOut className="h-4 w-4" />
              </button>
            ) : (
              <button 
                onClick={() => setActiveView('portal')}
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Client Login
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || activeView !== 'home' ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button
                onClick={() => handleNavClick('home')}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
                Home
            </button>
            
            <div className="bg-gray-50 rounded-lg mx-3 p-3">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Services</p>
              <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Pendirian PT / CV</button>
              <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Trademark (HAKI)</button>
              <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Contract Drafting</button>
              <button onClick={() => handleNavClick('all_services')} className="block w-full text-left py-2 text-sm font-bold text-blue-600 mt-2">View All Services →</button>
            </div>

            <div className="bg-gray-50 rounded-lg mx-3 p-3 mt-2">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2">Knowledge Base</p>
              <button onClick={() => handleNavClick('articles')} className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Latest Articles</button>
              <button onClick={() => handleNavClick('articles')} className="block w-full text-left py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Business Guides</button>
            </div>

            <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
                Contact
            </button>

            {isLoggedIn ? (
              <button 
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center mt-4 px-5 py-3 rounded-lg text-base font-semibold bg-red-50 text-red-600 hover:bg-red-100"
              >
                Sign Out <LogOut className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <button 
                onClick={() => {
                  setActiveView('portal');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center mt-4 px-5 py-3 rounded-lg text-base font-semibold bg-blue-600 text-white hover:bg-blue-700"
              >
                Access Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// ==========================================
// COMPONENT: Footer
// File: src/components/Footer.jsx
// ==========================================
const Footer = ({ setActiveView }) => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">Legal Contract ID</span>
            </div>
            <p className="text-gray-400 text-sm">
              Democratizing legal services for Indonesian businesses. Simple, Fast, Affordable.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('services')}>PT Establishment</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('services')}>Trademark Registration</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('services')}>Virtual Office</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('services')}>Contract Drafting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('about')}>About Us</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setActiveView('articles')}>Articles</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <div className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Globe className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Metode Pembayaran</p>
              <div className="flex flex-wrap gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Bank Transfer */}
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-xs italic">BCA</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">Mandiri</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">BNI</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xs">BRI</span>
                </div>
                
                {/* Credit Cards */}
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center border border-gray-200">
                  <span className="text-blue-900 font-bold text-xs italic">VISA</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center border border-gray-200">
                  <span className="text-red-600 font-bold text-xs">Mastercard</span>
                </div>

                {/* E-Wallets */}
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">GoPay</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-xs">OVO</span>
                </div>
                <div className="bg-white h-8 px-3 rounded flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">ShopeePay</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                &copy; 2024 Legal Contract Indonesia. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Sovereign Plaza 19th Floor, Jakarta Selatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// PAGE: Home Components
// File: src/pages/Home.jsx (Partial Components)
// ==========================================

const Hero = ({ setActiveView }) => (
  <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 backdrop-blur-sm mb-6 animate-pulse">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              <span className="text-xs font-bold text-white tracking-wide">
                Dipercaya lebih dari 5676+ usaha di Indonesia
              </span>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Serious Legal, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">Seriously Easy.</span>
            </h1>
            <p className="mt-3 text-base text-blue-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              The #1 Digital Legal Platform in Indonesia. Establish PT/CV, register trademarks, and draft contracts in minutes.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-sm font-medium text-blue-100">
               <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-lg">
                 <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                 Layanan 3 hari* selesai
               </div>
               <div className="flex items-center bg-blue-800/30 px-3 py-1 rounded-lg">
                 <Globe className="h-4 w-4 text-green-400 mr-2" />
                 100% Online Tanpa Tatap Muka
               </div>
            </div>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setActiveView('services')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-900 bg-white hover:bg-blue-50 md:py-4 md:text-lg transition-transform hover:scale-105 shadow-lg"
                >
                  Start Business
                </button>
                <button 
                  onClick={() => setActiveView('contact')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-transform hover:scale-105 shadow-lg"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="p-6 bg-blue-50 border-b border-gray-100 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">dashboard.legalcontract.id</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-3 rounded-lg mr-4">
                        <Briefcase className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">PT Establishment</h3>
                        <p className="text-xs text-gray-500">Complete with OSS & NPWP</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Trademark (HAKI)</h3>
                        <p className="text-xs text-gray-500">Protect your brand now</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Draft Contract</h3>
                        <p className="text-xs text-gray-500">Bilingual & Compliant</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

const TrustSection = () => {
  const logos = [
    "TechNusantara", "KopiKenanganMasa", "GoJekKW", "TokoLaris", "TravelokaLite", "BukalapakKecil"
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-8">
          Trusted by over 5676+ innovative companies across Indonesia
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="col-span-1 flex justify-center md:col-span-1 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
              <div className="h-8 flex items-center justify-center">
                <span className="text-lg font-black text-gray-800 italic font-serif">
                   {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Business Establishment",
      description: "Establish PT, CV, or Individual PT fully online. Includes Deed, SK Kemenkumham, NIB, and NPWP.",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      popular: true,
      price: "Start from IDR 3.9 Jt"
    },
    {
      title: "Intellectual Property",
      description: "Register Trademarks, Copyrights, and Patents to protect your brand assets in Indonesia.",
      icon: <Award className="h-8 w-8 text-purple-600" />,
      popular: true,
      price: "Start from IDR 2.5 Jt"
    },
    {
      title: "Contract Drafting",
      description: "Custom legal contracts for Employment, Vendor Agreements, NDAs, and Service Level Agreements.",
      icon: <FileText className="h-8 w-8 text-green-600" />,
      popular: false,
      price: "Start from IDR 1.5 Jt"
    },
    {
      title: "Digital Notary",
      description: "Notarize documents digitally without face-to-face meetings. Fast and legally binding.",
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      popular: false,
      price: "Start from IDR 500k"
    },
    {
      title: "Tax & Licensing",
      description: "Monthly tax reporting, financial statements, and OSS licensing updates (KBLI changes).",
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      popular: false,
      price: "Custom Quote"
    },
    {
      title: "Virtual Office",
      description: "Prestigious business address in Jakarta for your domicile requirements.",
      icon: <Users className="h-8 w-8 text-orange-600" />,
      popular: false,
      price: "Start from IDR 3 Jt/yr"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything Your Business Needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From inception to expansion, we handle the legal complexities so you can focus on growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white pt-6 px-6 pb-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {service.popular && (
                <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white uppercase rounded-full shadow-md">
                  Popular
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {service.icon}
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                  {service.price}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Business Owners <br/>
              <span className="text-blue-600">Trust Legal Contract ID?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We combine legal expertise with modern technology to deliver a service that is faster, cheaper, and more transparent than traditional law firms.
            </p>
            
            <dl className="mt-8 space-y-6">
              {[
                { title: '100% Digital Process', text: 'No traffic jams, no waiting rooms. Upload documents and sign digitally from anywhere.' },
                { title: 'Transparent Pricing', text: 'What you see is what you pay. No hidden fees or surprise hourly billings.' },
                { title: 'Expert Legal Team', text: 'Our documents are drafted by certified lawyers and reviewed to ensure full compliance with Indonesian law.' },
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">{item.title}</dt>
                    <dd className="mt-2 text-base text-gray-500">{item.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-white mb-2">48h</div>
                  <div className="text-sm text-gray-400">Average Service SLA</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">5676+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Data Security</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Budi Santoso",
      role: "CEO, PT Kopi Digital Indonesia",
      content: "Sangat membantu untuk startup baru seperti kami. Proses pembuatan PT selesai dalam 3 hari sesuai janji. Pelayanannya sangat responsif!",
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      role: "Founder, Beauty Glow",
      content: "Finally a legal service that speaks human language. I registered my trademark here and the process was 100% online. Highly recommended.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Owner, Tech Solutions",
      content: "Layanan notaris digitalnya top banget. Gak perlu macet-macetan ke kantor notaris, semua dokumen dikirim via kurir dan tanda tangan digital.",
      rating: 4
    }
  ];

  return (
    <div className="bg-blue-900 py-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-800 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-blue-200">
            Join thousands of satisfied business owners in Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                 <div className="bg-yellow-400 p-2 rounded-bl-xl rounded-tr-xl">
                   <Star className="h-5 w-5 text-white fill-current" />
                 </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <div className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400 mb-6">Our Strategic Partners</p>
        <div className="flex justify-center items-center gap-8 flex-wrap grayscale opacity-60">
           <span className="text-xl font-bold font-mono">BankJagoan</span>
           <span className="text-xl font-bold font-serif">XenditPay</span>
           <span className="text-xl font-bold font-sans">MekariJurnal</span>
           <span className="text-xl font-bold font-serif">DJKI_Resmi</span>
        </div>
      </div>
    </div>
  );
};

const ArticlesSection = () => {
  const articles = [
    {
      category: "Business Law",
      title: "Cara Mendirikan PT Perorangan 2024",
      excerpt: "Panduan lengkap syarat dan biaya pendirian PT Perorangan untuk UMKM tanpa perlu akta notaris.",
      date: "24 Nov 2024",
      image: "bg-blue-100"
    },
    {
      category: "Intellectual Property",
      title: "Pentingnya Pendaftaran Merek untuk UMKM",
      excerpt: "Jangan sampai brand Anda dicuri kompetitor. Simak alasan kenapa HAKI itu investasi, bukan beban.",
      date: "20 Nov 2024",
      image: "bg-purple-100"
    },
    {
      category: "Taxation",
      title: "Perbedaan PT dan CV: Mana yang Tepat?",
      excerpt: "Bingung pilih badan usaha? Ketahui perbedaan pajak, tanggung jawab, dan modal minimal PT vs CV.",
      date: "15 Nov 2024",
      image: "bg-green-100"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Latest Legal Insights</h2>
            <p className="mt-2 text-gray-500">Stay updated with Indonesian business regulations.</p>
          </div>
          <button className="hidden sm:flex text-blue-600 font-medium hover:text-blue-800 items-center">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
              <div className={`h-48 w-full ${article.image} flex items-center justify-center`}>
                <BookOpen className="h-12 w-12 text-gray-400/50 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-1 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <button className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa perbedaan utama antara PT dan CV?",
      answer: "PT (Perseroan Terbatas) adalah badan hukum di mana harta kekayaan pemilik terpisah dari harta perusahaan, sehingga tanggung jawab pemilik terbatas pada modal yang disetor. Sedangkan CV (Persekutuan Komanditer) bukan badan hukum, sehingga sekutu aktif memiliki tanggung jawab pribadi hingga ke harta pribadi jika terjadi kerugian."
    },
    {
      question: "Berapa lama proses pendirian badan usaha?",
      answer: "Proses pendirian PT atau CV di Legal Contract Indonesia rata-rata memakan waktu 3-5 hari kerja setelah seluruh dokumen persyaratan lengkap dan ditandatangani. Untuk PT Perorangan bisa lebih cepat, sekitar 1-2 hari kerja."
    },
    {
      question: "Apakah Virtual Office legal untuk domisili PT/CV?",
      answer: "Ya, Virtual Office legal dan diakui oleh pemerintah sebagai alamat domisili usaha yang sah, terutama di Jakarta (sesuai zonasi). Ini solusi hemat biaya bagi bisnis yang belum memerlukan fisik kantor operasional."
    },
    {
      question: "Apa itu NIB dan apakah wajib memilikinya?",
      answer: "NIB (Nomor Induk Berusaha) adalah identitas pelaku usaha yang diterbitkan oleh Lembaga OSS. NIB wajib dimiliki oleh setiap pelaku usaha sebagai syarat legalitas dasar untuk menjalankan kegiatan bisnis, mengajukan izin lanjutan, dan akses kepabeanan."
    },
    {
      question: "Berapa lama masa perlindungan Merek (HAKI)?",
      answer: "Perlindungan hukum atas Merek terdaftar berlaku selama 10 tahun sejak tanggal penerimaan permohonan dan dapat diperpanjang untuk jangka waktu yang sama."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-500">Jawaban atas pertanyaan umum seputar legalitas usaha di Indonesia.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-200 shadow-sm hover:border-blue-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500">Masih punya pertanyaan?</p>
          <button className="mt-2 text-blue-600 font-bold hover:underline">Hubungi Tim Support Kami</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// PAGE: All Services
// File: src/pages/AllServices.jsx
// ==========================================
const AllServicesView = () => {
  const [activeCategory, setActiveCategory] = useState("pendirian");
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      id: "pendirian",
      title: "Pendirian Usaha",
      icon: <Building className="h-5 w-5" />,
      services: [
        { 
          name: "Pendirian PT", 
          price: "Mulai Rp 3.900.000", 
          desc: "Layanan pendirian Perseroan Terbatas (PT) lengkap dengan Akta Pendirian, SK Kemenkumham, NIB, dan NPWP. Cocok untuk usaha skala menengah hingga besar.",
          requirements: [
            "Minimal 2 orang pendiri (Warga Negara Indonesia).",
            "Masing-masing pendiri wajib mengambil bagian saham.",
            "Nama PT minimal terdiri dari 3 suku kata (tidak boleh pakai bahasa asing).",
            "Modal dasar minimal Rp 50.000.000 (Ketentuan UU Cipta Kerja dapat berbeda).",
            "Suami istri yang mendirikan PT wajib ada perjanjian pisah harta (Prenup)."
          ],
          documents: [
            "Scan e-KTP Pendiri & Pengurus",
            "Scan NPWP Pendiri & Pengurus",
            "Scan Kartu Keluarga Direktur Utama",
            "Surat Keterangan Domisili Usaha (jika diperlukan)",
            "Foto lokasi kantor (tampak depan & dalam)"
          ]
        },
        { 
          name: "Pendirian CV", 
          price: "Mulai Rp 2.900.000", 
          desc: "Pendirian Commanditaire Vennootschap (CV) untuk usaha kecil hingga menengah. Proses lebih cepat dan persyaratan lebih sederhana dibandingkan PT.",
          requirements: [
            "Minimal 2 orang pendiri (Sekutu Aktif & Pasif).",
            "Hanya untuk Warga Negara Indonesia (WNI).",
            "Tidak ada ketentuan minimal modal dasar.",
            "Nama CV tidak wajib 3 kata."
          ],
          documents: [
            "Scan e-KTP Para Pendiri",
            "Scan NPWP Para Pendiri",
            "Scan Kartu Keluarga Penanggung Jawab",
            "Surat Keterangan Domisili (SKDP)",
            "Bukti Kepemilikan/Sewa Tempat Usaha"
          ]
        },
        { 
          name: "Pendirian PT Perorangan", 
          price: "Mulai Rp 1.500.000", 
          desc: "Badan usaha berbadan hukum yang didirikan oleh 1 orang saja. Khusus untuk kriteria Usaha Mikro dan Kecil (UMK).",
          requirements: [
            "Hanya 1 orang pendiri (WNI).",
            "Berusia minimal 17 tahun dan cakap hukum.",
            "Memenuhi kriteria Usaha Mikro dan Kecil (Modal maks 5M diluar tanah/bangunan)."
          ],
          documents: [
            "Scan e-KTP Pendiri",
            "Scan NPWP Pendiri",
            "Data alamat usaha lengkap"
          ]
        },
        { 
          name: "Pendirian PT PMA", 
          price: "Mulai Rp 12.000.000", 
          desc: "Pendirian PT Penanaman Modal Asing untuk investor luar negeri yang ingin berbisnis di Indonesia.",
          requirements: [
            "Minimal 2 pemegang saham (bisa perorangan asing atau badan hukum asing).",
            "Wajib investasi minimal Rp 10 Miliar (diluar tanah & bangunan).",
            "Sesuai dengan Daftar Positif Investasi (DPI)."
          ],
          documents: [
            "Paspor (WNA) atau Anggaran Dasar (Badan Hukum Asing)",
            "Surat Kuasa (jika dikuasakan)",
            "Flowchart bisnis plan"
          ]
        },
      ]
    },
    {
      id: "haki",
      title: "Kekayaan Intelektual",
      icon: <Award className="h-5 w-5" />,
      services: [
        { 
          name: "Pendaftaran Merek", 
          price: "Mulai Rp 2.500.000", 
          desc: "Lindungi identitas brand Anda dari plagiarisme kompetitor. Hak eksklusif penggunaan merek selama 10 tahun.",
          requirements: [
            "Etiket / Label Merek (Format JPG).",
            "Tanda tangan pemohon.",
            "Menentukan kelas barang/jasa."
          ],
          documents: [
            "KTP Pemohon",
            "NPWP Pemohon",
            "Surat Pernyataan UMK (jika menggunakan tarif UMK)"
          ]
        },
        { 
          name: "Hak Cipta", 
          price: "Mulai Rp 1.500.000", 
          desc: "Perlindungan untuk karya seni, buku, lagu, software, dan ciptaan lainnya. Proses cepat dan berlaku seumur hidup pencipta + 70 tahun.",
          requirements: [
            "Judul Ciptaan.",
            "Tanggal pertama kali diumumkan.",
            "Contoh ciptaan (file/foto)."
          ],
          documents: [
            "KTP Pencipta",
            "NPWP Pencipta",
            "Surat Pengalihan Hak (jika pemegang hak berbeda dengan pencipta)"
          ]
        },
      ]
    },
    {
      id: "perizinan",
      title: "Perizinan & Pajak",
      icon: <FileCheck className="h-5 w-5" />,
      services: [
        { 
          name: "Pengurusan NIB", 
          price: "Mulai Rp 1.000.000", 
          desc: "Nomor Induk Berusaha sebagai identitas pelaku usaha yang diterbitkan OSS RBA.",
          requirements: ["Data KTP/Paspor", "Data Badan Usaha", "Rencana Umum Kegiatan Usaha"],
          documents: ["Akta Pendirian", "SK Kemenkumham", "NPWP Badan"]
        },
        { 
          name: "PKP (Pengusaha Kena Pajak)", 
          price: "Mulai Rp 2.500.000", 
          desc: "Pengukuhan status PKP agar perusahaan dapat menerbitkan faktur pajak PPN.",
          requirements: ["Omzet > 4.8M/tahun atau sukarela mendaftar", "Lolos survei lapangan kantor pajak"],
          documents: ["KTP & NPWP Pengurus", "Bukti tempat kegiatan usaha (Sewa/Milik)", "Peta Lokasi"]
        },
      ]
    },
    {
      id: "perubahan",
      title: "Perubahan Akta",
      icon: <PenTool className="h-5 w-5" />,
      services: [
        { name: "Perubahan Direksi", price: "Mulai Rp 3.000.000", desc: "Ganti pengurus perusahaan" },
        { name: "Perubahan Modal", price: "Mulai Rp 3.500.000", desc: "Tambah modal dasar/disetor" },
        { name: "Perubahan Alamat", price: "Mulai Rp 3.000.000", desc: "Pindah domisili usaha" },
        { name: "Jual Beli Saham", price: "Mulai Rp 3.500.000", desc: "Akta pemindahan hak saham" },
      ]
    },
    {
      id: "digital",
      title: "Layanan Digital",
      icon: <Globe className="h-5 w-5" />,
      services: [
        { 
          name: "Virtual Office", 
          price: "Mulai Rp 3.000.000/thn", 
          desc: "Sewa alamat bisnis di lokasi strategis Jakarta untuk domisili perusahaan dan surat menyurat.",
          requirements: ["KTP Penanggung Jawab", "NPWP Penanggung Jawab"],
          documents: ["Akta Perusahaan", "SK Kemenkumham", "NPWP Perusahaan"]
        },
        { name: "PSE Kominfo", price: "Mulai Rp 1.500.000", desc: "Wajib untuk aplikasi/web bisnis" },
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -50% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceCategories.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [serviceCategories]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen font-sans">
      {/* Modal */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Layanan Hukum Terlengkap</h1>
           <p className="text-gray-500 max-w-2xl mx-auto">Temukan semua kebutuhan legalitas bisnis Anda di sini. Harga transparan, proses cepat, dan 100% online.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation (Sticky) */}
          <div className="md:w-1/4">
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 sticky top-24">
                {serviceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors mb-1 ${
                      activeCategory === cat.id 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className={`mr-3 ${activeCategory === cat.id ? 'text-blue-600' : 'text-gray-400'}`}>
                      {cat.icon}
                    </span>
                    {cat.title}
                  </button>
                ))}
             </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-3/4 space-y-12">
            {serviceCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                     {cat.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.services.map((service, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedService(service)}
                      className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full cursor-pointer transform hover:-translate-y-1"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                          {service.desc}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-50 mt-auto">
                        <p className="text-xs text-gray-400 font-medium uppercase mb-1">Mulai dari</p>
                        <div className="flex items-center justify-between">
                           <p className="text-blue-600 font-bold text-base">{service.price}</p>
                           <div className="bg-gray-50 p-1.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <ChevronRight className="h-4 w-4" />
                           </div>
                        </div>
                        <p className="text-[10px] text-blue-400 mt-2 text-center group-hover:text-blue-600 transition-colors font-medium">
                          Lihat Syarat & Dokumen
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-12 text-center">
              <p className="text-sm text-blue-800">
                * Harga dapat berubah sewaktu-waktu sesuai dengan kebijakan pemerintah dan kompleksitas dokumen. 
                Hubungi konsultan kami untuk penawaran resmi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ==========================================
// PAGE: Contact Page
// File: src/pages/Contact.jsx
// ==========================================
const ContactView = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-500">Have questions about your business legality? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">WhatsApp / Phone</p>
                  <p className="text-lg text-gray-600">+62 812-3456-7890</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri, 09:00 - 18:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-lg text-gray-600">support@legalcontract.id</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Head Office</p>
                  <p className="text-base text-gray-600">
                    Sovereign Plaza, 19th Floor<br/>
                    Jl. TB Simatupang Kav. 36<br/>
                    Jakarta Selatan, 12430
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border">
                  <option>PT Establishment</option>
                  <option>Trademark Registration</option>
                  <option>Contract Drafting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border" placeholder="Tell us about your business needs..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// PAGE: Login Screen
// File: src/pages/LoginScreen.jsx
// ==========================================
const LoginScreen = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
           <div className="bg-blue-600 p-3 rounded-xl">
              <Shield className="h-10 w-10 text-white" />
           </div>
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or <a href="#" className="font-medium text-blue-600 hover:text-blue-500">start your 14-day free trial</a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="admin@mail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Google</span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                   <Briefcase className="h-5 w-5 text-blue-800" />
                   <span className="ml-2">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// PAGE: Client Portal
// File: src/pages/ClientPortal.jsx
// ==========================================
const ClientPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-500">Welcome back, PT Maju Bersama</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Users className="h-4 w-4 mr-2" /> Support
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Active Orders</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2 Active</span>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 pl-4 py-1">
                <p className="text-sm font-medium text-gray-900">Trademark "MajuJaya"</p>
                <p className="text-xs text-gray-500">Status: Waiting for DJKI Verification</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4 py-1">
                <p className="text-sm font-medium text-gray-900">Employment Contract Review</p>
                <p className="text-xs text-gray-500">Status: Draft Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Company Docs</h3>
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <ul className="space-y-3">
              {['Akta Pendirian.pdf', 'SK Kemenkumham.pdf', 'NIB.pdf'].map((doc) => (
                <li key={doc} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600 group-hover:text-blue-600">{doc}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">
            <h3 className="font-bold text-lg mb-2">Need a new contract?</h3>
            <p className="text-blue-100 text-sm mb-4">Create employment or vendor agreements in less than 15 minutes with our generator.</p>
            <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50">Create New Draft</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { action: 'Invoice Paid', detail: 'INV-2023-001 for PT Establishment', date: '2 hours ago' },
              { action: 'Document Uploaded', detail: 'KTP Director uploaded by Admin', date: '1 day ago' },
              { action: 'Order Created', detail: 'Trademark Registration - Class 35', date: '2 days ago' },
            ].map((item, i) => (
              <div key={i} className="px-6 py-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
                <div className="ml-auto text-xs text-gray-400">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN APP CONTROLLER
// File: src/App.jsx
// ==========================================
const App = () => {
  const [activeView, setActiveView] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@mail.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveView('home');
    setLoginError('');
  };

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <Hero setActiveView={setActiveView} />
            <TrustSection />
            <ServicesSection />
            <Features />
            <Testimonials />
            <PartnersSection />
            <ArticlesSection />
            <FAQSection />
          </>
        );
      case 'services':
        return (
          <div className="pt-20">
             <ServicesSection />
             <Testimonials />
             <div className="bg-blue-900 py-16 px-4 text-center">
               <h2 className="text-3xl font-bold text-white mb-4">Ready to start?</h2>
               <button onClick={() => setActiveView('contact')} className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">Contact Sales</button>
             </div>
          </div>
        );
      case 'all_services':
        return <AllServicesView />;
      case 'articles':
        return (
          <div className="pt-24 pb-20 bg-white">
            <div className="text-center mb-16">
                 <h1 className="text-4xl font-bold text-gray-900">Legal Insights</h1>
                 <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                   Latest news and updates about Indonesian Business Law.
                 </p>
            </div>
            <ArticlesSection />
            <div className="max-w-7xl mx-auto px-4 mt-12 flex justify-center">
               <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">Load More Articles</button>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                 <h1 className="text-4xl font-bold text-gray-900">About Legal Contract Indonesia</h1>
                 <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                   We are a technology-first legal platform dedicated to helping Indonesian SMEs and Startups navigate the complex legal landscape with ease.
                 </p>
               </div>
               <Features />
               <TrustSection />
               <PartnersSection />
            </div>
          </div>
        );
      case 'contact':
        return <ContactView />;
      case 'portal':
        return isLoggedIn ? (
          <ClientPortal />
        ) : (
          <LoginScreen onLogin={handleLogin} error={loginError} />
        );
      default:
        return (
          <>
            <Hero setActiveView={setActiveView} />
            <TrustSection />
            <ServicesSection />
            <Features />
            <Testimonials />
            <PartnersSection />
            <ArticlesSection />
            <FAQSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isScrolled={isScrolled} 
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      
      <main>
        {renderView()}
      </main>

      {!(activeView === 'portal' && isLoggedIn) && <Footer setActiveView={setActiveView} />}
      
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => window.open('https://wa.me/', '_blank')}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default App;