import 'package:flutter/material.dart';
import '../theme.dart';

class ScanResultScreen extends StatelessWidget {
  final bool isEdible;

  const ScanResultScreen({super.key, this.isEdible = true});

  Widget _buildNutritionRow(String label, String value, {bool isWarning = false}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.w500)),
          Text(value, style: TextStyle(color: isWarning ? Colors.red : AppTheme.darkGreen, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

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
                // ignore: deprecated_member_use
                color: isEdible ? AppTheme.lightGreenAccent.withOpacity(0.3) : Colors.red[50],
                border: Border.all(color: isEdible ? AppTheme.primaryGreen : Colors.red),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: isEdible ? AppTheme.primaryGreen : Colors.red,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(isEdible ? 'EDIBLE' : 'NON EDIBLE', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 12)),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      isEdible ? 'Safe for your diet profile' : 'Not suitable for your diet profile',
                      style: TextStyle(color: isEdible ? AppTheme.darkGreen : Colors.red, fontWeight: FontWeight.w500),
                    ),
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
            ExpansionTile(
              leading: const Icon(Icons.pie_chart_outline, color: AppTheme.darkGreen),
              title: const Text('Nutrition breakdown', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                  child: Column(
                    children: [
                      _buildNutritionRow('Calories', '150 kcal'),
                      _buildNutritionRow('Sugar', '12g', isWarning: true),
                      _buildNutritionRow('Protein', '2g'),
                      _buildNutritionRow('Sodium', '210mg', isWarning: true),
                      _buildNutritionRow('Fat', '8g'),
                    ],
                  ),
                ),
              ],
            ),
            _buildExpandable('Hidden ingredients', Icons.visibility_off_outlined),
            ExpansionTile(
              leading: const Icon(Icons.error_outline, color: AppTheme.darkGreen),
              title: const Text('Harmful ingredient alerts', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(color: Colors.red[50], borderRadius: BorderRadius.circular(8)),
                        child: const Row(
                          children: [
                            Icon(Icons.warning, color: Colors.red, size: 20),
                            SizedBox(width: 8),
                            Expanded(child: Text('High Sugar: Exceeds your daily allowance', style: TextStyle(color: Colors.red))),
                          ],
                        ),
                      ),
                      const SizedBox(height: 8),
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(color: Colors.orange[50], borderRadius: BorderRadius.circular(8)),
                        child: const Row(
                          children: [
                            Icon(Icons.warning, color: Colors.orange, size: 20),
                            SizedBox(width: 8),
                            Expanded(child: Text('Artificial Colors: Contains Red 40', style: TextStyle(color: Colors.deepOrange))),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            _buildExpandable('AI label explanation', Icons.help_outline),
            _buildExpandable('Allergy severity meter', Icons.health_and_safety_outlined),
          ],
        ),
      ),
    );
  }
}
