import 'package:flutter/material.dart';
import '../theme.dart';

class AnalyticsScreen extends StatefulWidget {
  const AnalyticsScreen({super.key});

  @override
  State<AnalyticsScreen> createState() => _AnalyticsScreenState();
}

class _AnalyticsScreenState extends State<AnalyticsScreen> {
  final TextEditingController _foodController = TextEditingController();
  final FocusNode _foodFocus = FocusNode();

  @override
  void initState() {
    super.initState();
    _foodFocus.addListener(() {
      setState(() {});
    });
  }

  @override
  void dispose() {
    _foodFocus.dispose();
    _foodController.dispose();
    super.dispose();
  }

  double _calories = 0;
  double _sugar = 0;
  double _protein = 0;
  double _carbs = 0;
  double _fat = 0;

  final double _caloriesLimit = 2000;
  final double _sugarLimit = 30;
  final double _proteinLimit = 50; 
  final double _carbsLimit = 250;
  final double _fatLimit = 70;

  void _addFood() {
    if (_foodController.text.trim().isEmpty) return;
    
    // Mock parsing and retrieving nutritional values
    setState(() {
      _calories += 450;
      _sugar += 12;
      _protein += 25;
      _carbs += 60;
      _fat += 15;
      _foodController.clear();
    });
    
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Food parsed and logged successfully!')),
    );
  }

  Widget _buildMetricBar(String label, double current, double limit, String unit) {
    double progress = current / limit;
    if (progress > 1.0) progress = 1.0;
    
    Color progressColor = current > limit ? Colors.red : AppTheme.primaryGreen;

    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(label, style: const TextStyle(fontWeight: FontWeight.bold)),
              Text('${current.toInt()}$unit / ${limit.toInt()}$unit', style: const TextStyle(color: Colors.grey, fontSize: 12)),
            ],
          ),
          const SizedBox(height: 8),
          LinearProgressIndicator(
            value: progress,
            backgroundColor: AppTheme.borderColor,
            color: progressColor,
            minHeight: 8,
            borderRadius: BorderRadius.circular(4),
          ),
        ],
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
            Text('Daily Consumption Tracker', style: Theme.of(context).textTheme.displayMedium),
            const SizedBox(height: 8),
            const Text('Manually enter foods consumed to track nutritional values.', style: TextStyle(color: Colors.grey)),
            const SizedBox(height: 24),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.borderColor),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Log Food', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _foodController,
                    focusNode: _foodFocus,
                    decoration: InputDecoration(
                      hintText: _foodFocus.hasFocus ? '' : 'e.g. "200g rice, 150g chicken, 1 apple"',
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                      focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.primaryGreen)),
                    ),
                    maxLines: 2,
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    child: ValueListenableBuilder<TextEditingValue>(
                      valueListenable: _foodController,
                      builder: (context, value, child) {
                        return ElevatedButton(
                          onPressed: value.text.trim().isNotEmpty ? _addFood : null,
                          child: const Text('Parse & Add'),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),
            const Text('Nutritional Intake', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            const SizedBox(height: 16),
            _buildMetricBar('Calories', _calories, _caloriesLimit, ' kcal'),
            _buildMetricBar('Protein', _protein, _proteinLimit, 'g'),
            _buildMetricBar('Carbs', _carbs, _carbsLimit, 'g'),
            _buildMetricBar('Fat', _fat, _fatLimit, 'g'),
            _buildMetricBar('Sugar', _sugar, _sugarLimit, 'g'),
          ],
        ),
      ),
    );
  }
}
