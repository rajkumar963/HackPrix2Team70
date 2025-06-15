
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
              <span className="text-2xl font-bold text-foreground">JanSahay</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering citizens to build better communities, together.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/civic-reporting" className="text-muted-foreground hover:text-primary transition-colors">Report Issue</Link></li>
              <li><Link to="/issue-map" className="text-muted-foreground hover:text-primary transition-colors">Live Map</Link></li>
              <li><Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Follow Us */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JanSahay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
