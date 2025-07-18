import React, { useContext, useEffect } from 'react';
import { HashRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import BenefitsPage from './pages/BenefitsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ScholarshipPage from './pages/ScholarshipPage';
import RedeemPage from './pages/RedeemPage';
import VoiceChatPage from './pages/VoiceChatPage';
import BuyTokens from './pages/BuyTokens'; // ✅ NEW: Import BuyTokens page
import { UserContext } from './contexts/UserContext';

const ReferralHandler: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { addTokens } = useContext(UserContext);

  useEffect(() => {
    const refId = searchParams.get('ref');
    if (refId) {
      console.log(`Referred by ${refId}. Awarding 5 tokens for both users.`);
      addTokens(5);
    }
  }, [searchParams, addTokens]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ReferralHandler />
      <div className="flex flex-col min-h-screen bg-bharat-blue-50 font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/voice-chat" element={<VoiceChatPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/scholarships" element={<ScholarshipPage />} />
            <Route path="/redeem" element={<RedeemPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/buy-tokens" element={<BuyTokens />} /> {/* ✅ NEW Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
