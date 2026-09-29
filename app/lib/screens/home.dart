import 'package:flutter/material.dart';
import '../theme.dart';
import '../widgets/bottom_nav.dart';
import 'scan_result.dart';
import 'ai_assistant.dart';
import 'analytics.dart';
import 'health_profile.dart';
import 'profile.dart';
import 'history.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentIndex = 1;

  final List<Widget> _pages = [
    const AnalyticsScreen(),
    const HomeView(),
    const HealthProfileScreen(),
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

  void _showScanPopup(BuildContext context) {
    bool shareWithCommunity = false;
    final TextEditingController productController = TextEditingController();
    final FocusNode scanFocus = FocusNode();

    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            scanFocus.addListener(() {
              setStateDialog(() {});
            });
            return AlertDialog(
              title: const Text('Scan Product'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Enter the product name', style: TextStyle(fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  TextField(
                    controller: productController,
                    focusNode: scanFocus,
                    decoration: InputDecoration(
                      hintText: 'e.g. Lay\'s, Oreo...',
                      hintStyle: TextStyle(
                        color: scanFocus.hasFocus ? Colors.transparent : Colors.grey,
                      ),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Checkbox(
                        value: shareWithCommunity,
                        onChanged: (val) {
                          setStateDialog(() {
                            shareWithCommunity = val ?? false;
                          });
                        },
                      ),
                      const Expanded(
                        child: Text('Do you like to share it with community website?'),
                      ),
                    ],
                  ),
                ],
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Cancel', style: TextStyle(color: Colors.grey)),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Save to history
                    final productName = productController.text.trim();
                    if (productName.isNotEmpty) {
                      scannedProductsHistory.add(productName);
                    }
                    Navigator.pop(context);
                    Navigator.push(context, MaterialPageRoute(builder: (_) => const ScanResultScreen()));
                  },
                  child: const Text('Scan'),
                ),
              ],
            );
          },
        );
      },
    ).then((_) => scanFocus.dispose());
  }

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
                Expanded(
                  child: Text('Hello, User Name', style: Theme.of(context).textTheme.displayMedium),
                ),
                GestureDetector(
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const ProfileScreen())),
                  child: Container(
                    width: 48,
                    height: 48,
                    decoration: const BoxDecoration(
                      color: AppTheme.lightGreenAccent,
                      shape: BoxShape.circle,
                    ),
                    alignment: Alignment.center,
                    child: const Icon(Icons.person, color: AppTheme.darkGreen),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 32),
            // Scan Card
            GestureDetector(
              onTap: () => _showScanPopup(context),
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
                        const SizedBox(height: 24),
            _buildCard(
              context: context,
              title: 'Scan History',
              icon: Icons.history,
              onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const HistoryScreen())),
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
          ],
        ),
      ),
    );
  }
}
