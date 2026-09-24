import 'package:flutter/material.dart';
import 'theme.dart';
import 'screens/onboarding.dart';
import 'screens/home.dart';

void main() {
  runApp(const SafeBiteApp());
}

class SafeBiteApp extends StatelessWidget {
  const SafeBiteApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Safe Bite',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.theme,
      initialRoute: '/',
      routes: {
        '/': (context) => const WelcomeScreen(),
        '/signin': (context) => const SignInScreen(),
        '/basic_details': (context) => const BasicDetailsScreen(),
        '/female_health': (context) => const FemaleHealthScreen(),
        '/dietary_preference': (context) => const DietaryPreferenceScreen(),
        '/medical_conditions': (context) => const MedicalConditionsScreen(),
        '/upload_reports': (context) => const UploadReportsScreen(),
        '/profile_setup': (context) => const ProfileSetupScreen(),
        '/home': (context) => const HomeScreen(),
      },
    );
  }
}
