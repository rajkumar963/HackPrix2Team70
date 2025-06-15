import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Calendar, Camera, Edit3, Save, Star, Award, Bell, Shield, Globe, Moon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    location: 'New York, USA',
    bio: 'Eco-enthusiast and community advocate.',
    rewardsOptIn: true,
    darkMode: false,
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const settingsCardRef = useRef<HTMLDivElement>(null);
  const achievementsCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      setProfileData(prevData => ({
        ...prevData,
        name: user.name || prevData.name,
        email: user.email,
      }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleToggleChange = (name: string, checked: boolean) => {
    setProfileData(prevData => ({
      ...prevData,
      [name]: checked
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
    // Here you would typically save the profileData to a database or API
    console.log('Profile saved:', profileData);
  };

  const achievements = [
    { title: 'Eco Warrior', description: 'Recycled 100 items', icon: Star, earned: true },
    { title: 'Plastic Fighter', description: 'Recycled 50 plastic items', icon: Award, earned: true },
    { title: 'Paper Saver', description: 'Recycled 25kg of paper', icon: Bell, earned: false },
    { title: 'Glass Master', description: 'Recycled 100 glass items', icon: Shield, earned: false }
  ];

  const getInitials = (name: string) => {
    if (!name) return '??';
    const names = name.split(' ');
    if (names.length > 1 && names[0] && names[names.length - 1]) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Profile</h1>
          <p className="text-gray-600">Manage your account settings and view your achievements.</p>
        </div>

        {/* Profile Card */}
        <Card ref={profileCardRef} className="bg-white/80 border-gray-200 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 ring-4 ring-blue-100">
                <AvatarFallback className="bg-blue-600 text-white text-xl font-bold">
                  {getInitials(profileData.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-gray-900 text-lg font-semibold">{profileData.name}</h3>
                <Badge className="bg-green-100 text-green-800 border-green-200">Eco-Enthusiast</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium"><User className="mr-2 inline-block w-4 h-4" /> Name</Label>
              {isEditing ? (
                <Input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{profileData.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium"><Mail className="mr-2 inline-block w-4 h-4" /> Email</Label>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{profileData.email}</p>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium"><Phone className="mr-2 inline-block w-4 h-4" /> Phone</Label>
              {isEditing ? (
                <Input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{profileData.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium"><MapPin className="mr-2 inline-block w-4 h-4" /> Location</Label>
              {isEditing ? (
                <Input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{profileData.location}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700 font-medium"><Calendar className="mr-2 inline-block w-4 h-4" /> Bio</Label>
              {isEditing ? (
                <Textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{profileData.bio}</p>
              )}
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              {isEditing ? (
                <div className="space-x-2">
                  <Button variant="outline" onClick={toggleEditing} className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                    Cancel
                  </Button>
                  <Button onClick={saveChanges} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                    <Save className="mr-2 w-4 h-4" /> Save
                  </Button>
                </div>
              ) : (
                <Button onClick={toggleEditing} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <Edit3 className="mr-2 w-4 h-4" /> Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card ref={settingsCardRef} className="bg-white/80 border-gray-200 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <Label className="text-gray-900 font-medium">Receive Recycling Rewards Notifications</Label>
              <Switch
                checked={profileData.rewardsOptIn}
                onCheckedChange={(checked) => handleToggleChange('rewardsOptIn', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <Label className="text-gray-900 font-medium">Dark Mode</Label>
              <Switch
                checked={profileData.darkMode}
                onCheckedChange={(checked) => handleToggleChange('darkMode', checked)}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <Label className="text-gray-900 font-medium">Language</Label>
              <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                <Globe className="mr-2 w-4 h-4" /> English
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Card */}
        <Card ref={achievementsCardRef} className="bg-white/80 border-gray-200 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
                  achievement.earned 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      achievement.earned 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                  {achievement.earned ? (
                    <Badge className="bg-green-600 text-white border-green-600">Earned</Badge>
                  ) : (
                    <Badge variant="outline" className="bg-white text-gray-600 border-gray-300">Locked</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;