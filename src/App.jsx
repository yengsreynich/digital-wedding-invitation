import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuestPage from "./pages/GuestPage.jsx"; 
import AdminPage from "./pages/AdminPage.jsx";

export default function App() {
  const [rsvps, setRsvps] = useState([]);

  const fetchRsvps = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rsvp');
      const result = await response.json();
      if (result.success) {
        setRsvps(result.data);
      }
    } catch (error) {
      console.error("មានបញ្ហាក្នុងการទាញទិន្នន័យ:", error);
    }
  };

  useEffect(() => {
    fetchRsvps();
  }, []);

  const handleDeleteRsvp = async (id) => {
    if (window.confirm("តើអូនពិតជាចង់លុបទិន្នន័យនេះមែនទេ?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/rsvp/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
          setRsvps((prev) => prev.filter((item) => item.id !== id));
        } else {
          alert("លុបមិនបានសម្រេចទេ!");
        }
      } catch (error) {
        console.error("មានបញ្ហាក្នុងការលុប:", error);
      }
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<GuestPage rsvps={rsvps} onRefresh={fetchRsvps} />} 
        />
        <Route 
          path="/admin" 
          element={<AdminPage rsvps={rsvps} onDeleteRsvp={handleDeleteRsvp} />} 
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}