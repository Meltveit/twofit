
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { getUserProfile } from '../../services/userService';
import { getDailyFoodLog, addFoodLog } from '../../services/foodService';

const HomeScreen = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [dailyLog, setDailyLog] = useState([]);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);

        const today = new Date().toISOString().split('T')[0];
        const log = await getDailyFoodLog(user.uid, today);
        setDailyLog(log);

        const totalCalories = log.reduce((sum, item) => sum + item.calories, 0);
        setCalories(totalCalories);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {profile ? (
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome, {profile.name}</Text>
      ) : (
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome</Text>
      )}
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Today's Calorie Intake:</Text>
      <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 20 }}>{calories} kcal</Text>
      <View>
        {dailyLog.map((item) => (
          <Text key={item.id}>{item.foodName}: {item.calories} kcal</Text>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
