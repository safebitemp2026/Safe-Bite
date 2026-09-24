import 'package:flutter/material.dart';
import '../theme.dart';

class AnalyticsScreen extends StatelessWidget {
  const AnalyticsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Analytics', style: Theme.of(context).textTheme.displayMedium),
            const SizedBox(height: 24),
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Row(
                children: [
                  Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: AppTheme.primaryGreen, width: 4),
                    ),
                    alignment: Alignment.center,
                    child: const Text('78', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24, color: AppTheme.darkGreen)),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Health score index', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                        Text('Excellent improvement this week! Keep avoiding ultra-processed inputs.', style: TextStyle(color: Colors.grey, fontSize: 12)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            const Text('Weekly scan trend', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 16),
            // Mock Bar Chart
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                _buildBar('M', 40),
                _buildBar('T', 60),
                _buildBar('W', 30),
                _buildBar('T', 80),
                _buildBar('F', 50),
                _buildBar('S', 90),
                _buildBar('S', 60),
              ],
            ),
            const SizedBox(height: 32),
            const Text('Top flagged ingredients', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              children: [
                _buildIngredientChip('Palm oil'),
                _buildIngredientChip('MSG'),
                _buildIngredientChip('Aspartame'),
              ],
            ),
            const SizedBox(height: 32),
            const Text('Today\'s consumption', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: LinearProgressIndicator(
                    value: 0.55,
                    backgroundColor: AppTheme.borderColor,
                    color: AppTheme.primaryGreen,
                    minHeight: 8,
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
                const SizedBox(width: 16),
                const Text('55%', style: TextStyle(fontWeight: FontWeight.bold)),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBar(String label, double height) {
    return Column(
      children: [
        Container(width: 20, height: height, decoration: BoxDecoration(color: AppTheme.primaryGreen, borderRadius: BorderRadius.circular(4))),
        const SizedBox(height: 8),
        Text(label, style: const TextStyle(color: Colors.grey, fontSize: 12)),
      ],
    );
  }

  Widget _buildIngredientChip(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.red[50],
        border: Border.all(color: Colors.red),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Text(label, style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
    );
  }
}
