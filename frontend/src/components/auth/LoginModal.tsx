
import * as React from "react"
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import AuthForm from "./AuthForm"

interface LoginModalProps {
  children: React.ReactNode;
  role?: 'user' | 'admin';
}

const LoginModal: React.FC<LoginModalProps> = ({ children, role }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [view, setView] = React.useState<'initial' | 'user' | 'admin'>(role || 'initial');
  const navigate = useNavigate();

  const handleBack = () => setView('initial');

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setView(role || 'initial');
    } else {
      // Use a timeout to avoid content flashing while dialog closes
      setTimeout(() => {
        setView(role || 'initial');
      }, 300);
    }
  };
  
  const handleAuthSuccess = () => {
    setIsOpen(false);
    navigate('/profile');
  };

  const renderContent = () => {
    switch (view) {
      case 'user':
        return <AuthForm role="user" onBack={handleBack} onAuthSuccess={handleAuthSuccess} />;
      case 'admin':
        return <AuthForm role="admin" onBack={handleBack} onAuthSuccess={handleAuthSuccess} />;
      default:
        return (
          <>
            <DialogHeader>
              <DialogTitle>Join JanSahay</DialogTitle>
              <DialogDescription>
                Select your role to login or sign up. It's quick and easy.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button onClick={() => setView('user')}>Login as User</Button>
              <Button variant="secondary" onClick={() => setView('admin')}>Login as Admin</Button>
            </div>
          </>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal;
