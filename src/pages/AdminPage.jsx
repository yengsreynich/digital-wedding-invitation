import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserCheck, UserX, Trash2, Search, ArrowLeft } from 'lucide-react';

export default function AdminPage() {
  const [guests, setGuests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const navigate = useNavigate();

  const fetchGuests = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rsvp');
      const result = await response.json();
      if (result.success) {
        setGuests(result.data);
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("តើអូនពិតជាចង់លុបទិន្នន័យនេះមែនទេ?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/rsvp/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
          setGuests(guests.filter(guest => guest.id !== id));
        } else {
          alert("លុបមិនបានសម្រេចទេ!");
        }
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const totalSubmissions = guests.length;
  const attendingGuests = guests.filter(g => g.attendance === 'នឹងចូលរួម' || g.attendance === 'yes');
  const totalHeadcount = attendingGuests.reduce((sum, g) => sum + Number(g.guests_count || 1), 0);
  const totalDeclined = guests.filter(g => g.attendance === 'មិនអាចចូលរួមបានទេ' || g.attendance === 'no').length;

  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (guest.message && guest.message.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterStatus === 'Attending') {
      return matchesSearch && (guest.attendance === 'នឹងចូលរួម' || guest.attendance === 'yes');
    } else if (filterStatus === 'Declined') {
      return matchesSearch && (guest.attendance === 'មិនអាចចូលរួមបានទេ' || guest.attendance === 'no');
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Navigation Button */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-black px-4 py-0 rounded-full border border-stone-950 hover:bg-stone-700 transition-all text-sm font-medium"
          >
            <ArrowLeft size={25} />Guest View
          </button>
          
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-black text-center">Admin Dashboard
          </h1>
        </div>

        {/* Summary Metrics Cards[cite: 12] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-emerald-950 p-5 rounded-2xl  flex items-center justify-between">
            <div>
              <p className="text-stone-400 text-sm">ការចុះឈ្មោះសរុប</p>
              <h3 className="text-2xl font-bold text-white">{totalSubmissions}</h3>
            </div>
            <Users className="text-white" size={32} />
          </div>

          <div className="bg-emerald-950 p-5 rounded-2xl  flex items-center justify-between">
            <div>
              <p className="text-stone-400 text-sm">ចំនួនមនុស្សចូលរួមសរុប</p>
              <h3 className="text-2xl font-bold text-white">{totalHeadcount} នាក់</h3>
            </div>
            <UserCheck className="text-white" size={32} />
          </div>

          <div className="bg-emerald-950 p-5 rounded-2xl  flex items-center justify-between">
            <div>
              <p className="text-stone-400 text-sm">អវត្តមាន / មិនមក</p>
              <h3 className="text-2xl font-bold text-white">{totalDeclined}</h3>
            </div>
            <UserX className="text-white" size={32} />
          </div>
        </div>

        {/* Search and Filters[cite: 12] */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 text-stone-400" size={18} />
            <input 
              type="text" 
              placeholder="ស្វែងរកតាមឈ្មោះ ឬសារ..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded-full pl-10 pr-4 py-2 text-white outline-none "
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => setFilterStatus('All')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors   ${filterStatus === 'All' ? 'bg-emerald-950 text-stone-300 font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}`}
            >
              ទាំងអស់
            </button>
            <button 
              onClick={() => setFilterStatus('Attending')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterStatus === 'Attending' ? 'bg-emerald-950 text-stone-300  font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}`}
            >
              ចូលរួម
            </button>
            <button 
              onClick={() => setFilterStatus('Declined')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterStatus === 'Declined' ? 'bg-emerald-950 text-stone-300  font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}`}
            >
              មិនចូលរួម
            </button>
          </div>
        </div>

        {/* Guest Responses Table[cite: 12] */}
        <div className="bg-emerald-950 border border-stone-700 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900/50 text-gray-300 text-sm border-b border-stone-700">
                  <th className="p-4">ឈ្មោះភ្ញៀវ</th>
                  <th className="p-4">ការចូលរួម</th>
                  <th className="p-4">ចំនួនភ្ញៀវមកជាមួយ</th>
                  <th className="p-4">សារជូនពរ</th>
                  <th className="p-4 text-center">សកម្មភាព</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-700 text-sm">
                {filteredGuests.length > 0 ? (
                  filteredGuests.map((guest) => (
                    <tr key={guest.id} className="hover:bg-stone-750 transition-colors">
                      <td className="p-4 font-semibold text-white">{guest.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${guest.attendance.includes('ចូលរួម') || guest.attendance === 'yes' ? 'bg-green-900/30 text-white border border-green-900/50' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                          {guest.attendance}
                        </span>
                      </td>
                      <td className="p-4 text-center font-bold text-white">{guest.guests_count} នាក់</td>
                      <td className="p-4 text-stone-300 max-w-xs truncate">"{guest.message || 'គ្មានសារ'}"</td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => handleDelete(guest.id)} 
                          className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-full transition-all"
                          title="លុបទិន្នន័យ"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-stone-500 italic">
                      រកមិនឃើញទិន្នន័យភ្ញៀវទេ...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}