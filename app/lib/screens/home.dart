import 'package:flutter/material.dart';
import '../theme.dart';
import '../widgets/bottom_nav.dart';
import 'scan_result.dart';
import 'safe_choice.dart';
import 'ai_assistant.dart';
import 'analytics.dart';
import 'profile.dart';
import 'history.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 0;

  final List<Widget> _pages = [
    const HomeView(),
    const AnalyticsScreen(),
    const HistoryScreen(),
    const ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNav(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  Widget _buildCard({
    required BuildContext context,
    required String title,
    required IconData icon,
    required VoidCallback onTap,
    Color color = AppTheme.lightGreenAccent,
    bool isLarge = false,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: AppTheme.borderColor),
        ),
        child: Row(
          children: [
            Icon(icon, color: AppTheme.primaryGreen, size: isLarge ? 40 : 24),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                title,
                style: TextStyle(
                  fontSize: isLarge ? 24 : 16,
                  fontWeight: FontWeight.bold,
                  color: AppTheme.darkGreen,
                ),
              ),
            ),
            const Icon(Icons.arrow_forward, color: AppTheme.darkGreen),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Hello, Sinan 👋', style: Theme.of(context).textTheme.displayMedium),
                    const SizedBox(height: 4),
                    const Text('Make informed choices for a healthier you.', style: TextStyle(color: Colors.grey)),
                  ],
                ),
                Row(
                  children: const [
                    Icon(Icons.notifications_outlined, color: AppTheme.darkGreen),
                    SizedBox(width: 16),
                    CircleAvatar(
                      backgroundColor: AppTheme.lightGreenAccent,
                      child: Icon(Icons.person_outline, color: AppTheme.primaryGreen),
                    )
                  ],
                ),
              ],
            ),
            const SizedBox(height: 32),
            // Scan Card
            GestureDetector(
              onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const ScanResultScreen())),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: AppTheme.lightGreenAccent,
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Scan\nCheck\nEat Safe', style: Theme.of(context).textTheme.displayLarge?.copyWith(height: 1.2)),
                    const SizedBox(height: 16),
                    const Text(
                      'Find out if the food you\'re consuming is safe for you or not.',
                      style: TextStyle(fontSize: 14),
                    ),
                    const SizedBox(height: 24),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      decoration: BoxDecoration(
                        color: AppTheme.primaryGreen,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.qr_code_scanner, color: Colors.white, size: 20),
                          SizedBox(width: 8),
                          Text('Scan Product', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            _buildCard(
              context: context,
              title: 'Safe Choice',
              icon: Icons.check_circle_outline,
              onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SafeChoiceScreen())),
              color: Colors.white,
            ),
            const SizedBox(height: 16),
            _buildCard(
              context: context,
              title: 'Ask NutriAI',
              icon: Icons.chat_bubble_outline,
              onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const AiAssistantScreen())),
              color: Colors.white,
            ),
            const SizedBox(height: 24),
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: AppTheme.lightGreenAccent,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.primaryGreen.withValues(alpha: 0.3)),
              ),
              child: Row(
                children: [
                  const Icon(Icons.shield_outlined, color: AppTheme.primaryGreen, size: 30),
                  const SizedBox(width: 16),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text('Your Safety Matters', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                      Text('Stay Informed. Stay healthy.', style: TextStyle(color: Colors.grey, fontSize: 12)),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
