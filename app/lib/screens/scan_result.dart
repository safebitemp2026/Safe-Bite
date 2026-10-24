import 'package:flutter/material.dart';
import '../theme.dart';

class ScanResultScreen extends StatefulWidget {
  final bool isEdible;
  final String? productName;

  const ScanResultScreen({
    super.key,
    this.isEdible = true,
    this.productName,
  });

  @override
  State<ScanResultScreen> createState() => _ScanResultScreenState();
}

class _ScanResultScreenState extends State<ScanResultScreen> {
  late bool _isEdible;

  @override
  void initState() {
    super.initState();
    _isEdible = widget.isEdible;
  }

  Widget _buildNutritionRow(String label, String value, {bool isWarning = false}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.w500)),
          Text(
            value,
            style: TextStyle(
              color: isWarning ? Colors.red : AppTheme.darkGreen,
              fontWeight: FontWeight.bold,
            ),
          ),
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
          child: Text(
            'Detailed analysis for $title based on your health profile.',
            style: const TextStyle(color: Colors.grey),
          ),
        ),
      ],
    );
  }

  Widget _buildStatusBox() {
    final Color badgeColor = _isEdible ? const Color(0xFF689F38) : const Color(0xFFDC2626);
    final Color boxBgColor = _isEdible ? const Color(0xFFF7FAF4) : const Color(0xFFFEF2F2);
    final Color borderColor = _isEdible ? const Color(0xFF8DC351) : const Color(0xFFF87171);
    final String badgeText = _isEdible ? 'EDIBLE' : 'NON EDIBLE';
    final String statusText = _isEdible ? 'Safe for your diet profile' : 'Not safe for your diet profile';

    return InkWell(
      onTap: () {
        setState(() {
          _isEdible = !_isEdible;
        });
      },
      borderRadius: BorderRadius.circular(16),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
        decoration: BoxDecoration(
          color: boxBgColor,
          border: Border.all(color: borderColor, width: 1.2),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: badgeColor,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(
                badgeText,
                style: const TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 11,
                  letterSpacing: 0.5,
                ),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                statusText,
                style: const TextStyle(
                  color: Color(0xFF2E382D),
                  fontSize: 13.5,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan result'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          children: [
            // Status Card: EDIBLE (green box matching uploaded picture) or NON EDIBLE (red box)
            _buildStatusBox(),
            const SizedBox(height: 24),

            // 1. AI-Based Food Analysis
            _buildExpandable('AI food analysis', Icons.analytics_outlined),

            // 2. AI Ingredient Scanner
            _buildExpandable('Ingredient scanner', Icons.list_alt),

            // 3. NOVA Classification
            _buildExpandable('NOVA class · 4', Icons.warning_amber_outlined),

            // 4. Food Additive Intelligence
            _buildExpandable('E-number details', Icons.numbers),

            // 5. Personalised Health Risk Score
            _buildExpandable('Personalised risk score', Icons.speed),

            // 6. Nutrition Analysis
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

            // 7. Hidden Ingredient Detection
            _buildExpandable('Hidden ingredients', Icons.visibility_off_outlined),

            // 8. Harmful Ingredient Alerts
            ExpansionTile(
              leading: const Icon(Icons.error_outline, color: AppTheme.darkGreen),
              title: const Text('Harmful ingredient alerts', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (_isEdible)
                        Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: const Color(0xFFF7FAF4),
                            borderRadius: BorderRadius.circular(8),
                            border: Border.all(color: const Color(0xFF8DC351).withValues(alpha: 0.5)),
                          ),
                          child: const Row(
                            children: [
                              Icon(Icons.check_circle, color: Color(0xFF689F38), size: 20),
                              SizedBox(width: 8),
                              Expanded(
                                child: Text(
                                  'All ingredients are safe for your dietary preferences.',
                                  style: TextStyle(color: Color(0xFF2E382D), fontSize: 13),
                                ),
                              ),
                            ],
                          ),
                        )
                      else ...[
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
                    ],
                  ),
                ),
              ],
            ),

            // 9. AI Food Label Explanation
            _buildExpandable('AI label explanation', Icons.help_outline),

            // 10. Allergy Severity Meter
            _buildExpandable('Allergy severity meter', Icons.health_and_safety_outlined),
          ],
        ),
      ),
    );
  }
}
