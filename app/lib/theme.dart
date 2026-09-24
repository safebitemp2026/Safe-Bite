import 'package:flutter/material.dart';

class AppTheme {
  // Colors
  static const Color background = Color(0xFFFCFBF8); // Warm off-white
  static const Color primaryGreen = Color(0xFF75B343); // Bright/lime green
  static const Color darkGreen = Color(0xFF1E3A1A); // Dark forest-green text
  static const Color lightGreenAccent = Color(0xFFE8F3E1); // Light green accents
  static const Color borderColor = Color(0xFFE0E0E0);
  
  static ThemeData get theme {
    return ThemeData(
      scaffoldBackgroundColor: background,
      primaryColor: primaryGreen,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primaryGreen,
        surface: background,
        primary: primaryGreen,
        onPrimary: Colors.white,
        secondary: lightGreenAccent,
      ),
      textTheme: const TextTheme(
        displayLarge: TextStyle(color: darkGreen, fontWeight: FontWeight.bold, fontSize: 32),
        displayMedium: TextStyle(color: darkGreen, fontWeight: FontWeight.bold, fontSize: 24),
        bodyLarge: TextStyle(color: darkGreen, fontSize: 16),
        bodyMedium: TextStyle(color: darkGreen, fontSize: 14),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: background,
        elevation: 0,
        iconTheme: IconThemeData(color: darkGreen),
        titleTextStyle: TextStyle(color: darkGreen, fontSize: 20, fontWeight: FontWeight.bold),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primaryGreen,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
          padding: const EdgeInsets.symmetric(vertical: 16),
          textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: borderColor),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: borderColor),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: primaryGreen),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
      ),
    );
  }
}
