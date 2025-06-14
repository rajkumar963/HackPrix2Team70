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
import { gsap } from 'gsap';

const Profile = () => {
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
    // GSAP animations can be added here if needed in the future
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Your Profile</h1>
          <p className="text-purple-200">Manage your account settings and view your achievements.</p>
        </div>

        {/* Profile Card */}
        <Card ref={profileCardRef} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-white text-blue-600 text-xl font-bold">JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-white text-lg font-semibold">{profileData.name}</h3>
                <Badge className="bg-purple-600 text-white">Eco-Enthusiast</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300"><User className="mr-2 inline-block w-4 h-4" /> Name</Label>
              {isEditing ? (
                <Input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              ) : (
                <p className="text-gray-400">{profileData.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300"><Mail className="mr-2 inline-block w-4 h-4" /> Email</Label>
              <p className="text-gray-400">{profileData.email}</p>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300"><Phone className="mr-2 inline-block w-4 h-4" /> Phone</Label>
              {isEditing ? (
                <Input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              ) : (
                <p className="text-gray-400">{profileData.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300"><MapPin className="mr-2 inline-block w-4 h-4" /> Location</Label>
              {isEditing ? (
                <Input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              ) : (
                <p className="text-gray-400">{profileData.location}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300"><Calendar className="mr-2 inline-block w-4 h-4" /> Bio</Label>
              {isEditing ? (
                <Textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              ) : (
                <p className="text-gray-400">{profileData.bio}</p>
              )}
            </div>

            <div className="flex justify-end">
              {isEditing ? (
                <div className="space-x-2">
                  <Button variant="outline" onClick={toggleEditing} className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
                    Cancel
                  </Button>
                  <Button onClick={saveChanges} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save className="mr-2 w-4 h-4" /> Save
                  </Button>
                </div>
              ) : (
                <Button onClick={toggleEditing} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Edit3 className="mr-2 w-4 h-4" /> Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card ref={settingsCardRef} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Receive Recycling Rewards Notifications</Label>
              <Switch
                checked={profileData.rewardsOptIn}
                onCheckedChange={(checked) => handleToggleChange('rewardsOptIn', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Dark Mode</Label>
              <Switch
                checked={profileData.darkMode}
                onCheckedChange={(checked) => handleToggleChange('darkMode', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Language</Label>
              <Button variant="outline" className="bg-gray-700 border-gray-600 text-gray-300">
                <Globe className="mr-2 w-4 h-4" /> English
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Card */}
        <Card ref={achievementsCardRef} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-700/30">
                  <div className="flex items-center space-x-4">
                    <achievement.icon className="w-6 h-6 text-yellow-400" />
                    <div>
                      <h3 className="text-white font-semibold">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                  {achievement.earned ? (
                    <Badge className="bg-green-600 text-white">Earned</Badge>
                  ) : (
                    <Badge className="bg-gray-600 text-white">Locked</Badge>
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
