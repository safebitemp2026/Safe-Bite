import 'package:flutter/material.dart';
import '../theme.dart';

class ScanResultScreen extends StatelessWidget {
  const ScanResultScreen({super.key});

  Widget _buildExpandable(String title, IconData icon) {
    return ExpansionTile(
      leading: Icon(icon, color: AppTheme.darkGreen),
      title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
      children: [
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text('Detailed analysis for $title based on your health profile.', style: const TextStyle(color: Colors.grey)),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan result'),
        leading: IconButton(icon: const Icon(Icons.arrow_back), onPressed: () => Navigator.pop(context)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.red[50],
                border: Border.all(color: Colors.red),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(color: Colors.red, borderRadius: BorderRadius.circular(20)),
                    child: const Text('HIGH RISK', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 12)),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: Text('Contains excess additives for your diet', style: TextStyle(color: Colors.red, fontWeight: FontWeight.w500)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            _buildExpandable('AI food analysis', Icons.analytics_outlined),
            _buildExpandable('Ingredient scanner', Icons.list_alt),
            _buildExpandable('NOVA class · 4', Icons.warning_amber_outlined),
            _buildExpandable('E-number details', Icons.numbers),
            _buildExpandable('Personalised risk score', Icons.speed),
            _buildExpandable('Nutrition breakdown', Icons.pie_chart_outline),
            _buildExpandable('Hidden ingredients', Icons.visibility_off_outlined),
            _buildExpandable('Harmful ingredient alerts', Icons.error_outline),
            _buildExpandable('AI label explanation', Icons.help_outline),
          ],
        ),
      ),
    );
  }
}
