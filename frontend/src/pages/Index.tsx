
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold m-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to EcoChain RecycleFusion
        </h1>
        <p className="text-xl text-muted-foreground mb-8 mt-[-20px]">
          Your comprehensive platform for civic engagement and recycling rewards
        </p>
        <Link 
          to="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold"
        >
          Go to Dashboard →
        </Link>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 p-5">
        <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
          <Link to="/civic-reporting" className="flex flex-col items-center">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-lg font-semibold mb-2">Civic Reporting</h3>
            <p className="text-muted-foreground">Report civic issues in your community and track their resolution.</p>
          </Link>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
          <Link to="/recycling-rewards" className="flex flex-col items-center">
            <div className="text-2xl mb-3">🎁</div>
            <h3 className="text-lg font-semibold mb-2">Recycling Rewards</h3>
            <p className="text-muted-foreground">Earn rewards for your recycling activities and environmental contributions.</p>
          </Link>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
          <Link to="/leaderboard" className="flex flex-col items-center">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold mb-2">Leaderboard</h3>
            <p className="text-muted-foreground">Compete with other community members and climb the leaderboard.</p>
          </Link>
        </div>

        {/* Centered Last Row (2 items) */}
        <div className="col-span-full flex justify-center gap-6">
          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow w-full md:w-[300px]">
            <Link to="/issue-map" className="flex flex-col items-center">
              <div className="text-2xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold mb-2">Issue Map</h3>
              <p className="text-muted-foreground">View and track civic issues on an interactive map.</p>
            </Link>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow w-full md:w-[300px]">
            <Link to="/notifications" className="flex flex-col items-center">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-muted-foreground">Track your impact and community engagement metrics.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
