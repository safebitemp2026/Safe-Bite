import 'package:flutter/material.dart';
import '../theme.dart';

class HealthProfileScreen extends StatefulWidget {
  const HealthProfileScreen({super.key});

  @override
  State<HealthProfileScreen> createState() => _HealthProfileScreenState();
}

class _HealthProfileScreenState extends State<HealthProfileScreen> {
  final TextEditingController _reasonController = TextEditingController();
  bool _isDietPlanGenerated = false;

  void _showAlternatePlanDialog() {
    FocusNode dialogFocus = FocusNode();
    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            dialogFocus.addListener(() {
              setStateDialog(() {});
            });
            return AlertDialog(
              title: const Text('Alternate Diet Plan'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Why do you need an alternate plan?', style: TextStyle(fontWeight: FontWeight.bold)),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _reasonController,
                    focusNode: dialogFocus,
                    maxLines: 3,
                    decoration: InputDecoration(
                      hintText: 'e.g. "I cannot afford avocado" or "I am allergic to peanuts"',
                      hintStyle: TextStyle(
                        color: dialogFocus.hasFocus ? Colors.transparent : Colors.grey,
                      ),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                  ),
                ],
              ),
              actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Cancel', style: TextStyle(color: Colors.grey)),
            ),
            ValueListenableBuilder<TextEditingValue>(
              valueListenable: _reasonController,
              builder: (context, value, child) {
                final isEnabled = value.text.trim().isNotEmpty;
                return ElevatedButton(
                  onPressed: isEnabled
                      ? () {
                          Navigator.pop(context);
                          _reasonController.clear();
                          ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                  content: Text(
                                      'Alternate Diet Plan Generated!')));
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (_) =>
                                      const GeneratedDietPlanScreen()));
                        }
                      : null,
                  child: const Text('Submit & Generate'),
                );
              },
            ),
          ],
        );
          },
        );
      },
    ).then((_) => dialogFocus.dispose());
  }

  Widget _buildSectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12.0),
      child: Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
    );
  }

  Widget _buildCard({required String title, required String content, Color? bgColor, Color? borderColor, Color? textColor}) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: bgColor ?? Colors.white,
        border: Border.all(color: borderColor ?? AppTheme.borderColor),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: TextStyle(fontWeight: FontWeight.bold, color: textColor ?? Colors.black)),
          const SizedBox(height: 8),
          Text(content, style: TextStyle(color: textColor ?? Colors.grey[800])),
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
            Text('Health Profile', style: Theme.of(context).textTheme.displayMedium),
            const SizedBox(height: 8),
            const Text('Personalized dashboard & AI Diet Planning', style: TextStyle(color: Colors.grey)),
            const SizedBox(height: 24),
            
            _buildSectionTitle('Daily Limits Summary'),
            _buildCard(
              title: 'Recommended Maximums', 
              content: 'Sugar: 30g\nCarbs: 250g\ncalories: 2000kcal\nFat: 70g\nProtein: 50g',
            ),
            
            _buildSectionTitle('Personalized Dietary Guidance'),
            GestureDetector(
              onTap: () {
                Navigator.push(context, MaterialPageRoute(builder: (_) => const DietaryGuidanceDetailsScreen()));
              },
              child: Container(
                width: double.infinity,
                margin: const EdgeInsets.only(bottom: 16),
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(color: AppTheme.primaryGreen),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    Text('View Foods to Consume & Avoid', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkGreen)),
                    Icon(Icons.arrow_forward_ios, size: 16, color: AppTheme.darkGreen),
                  ],
                ),
              ),
            ),
            if (globalGender == 'Female') ...[
              GestureDetector(
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const SpecificGuidanceScreen(title: 'Pregnancy-Specific Guidance', content: 'Include folate-rich foods. Avoid raw seafood and unpasteurized dairy.')));
                },
                child: Container(
                  width: double.infinity,
                  margin: const EdgeInsets.only(bottom: 16),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border.all(color: AppTheme.primaryGreen),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Pregnancy-Specific Guidance', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkGreen)),
                      Icon(Icons.arrow_forward_ios, size: 16, color: AppTheme.darkGreen),
                    ],
                  ),
                ),
              ),
              GestureDetector(
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const SpecificGuidanceScreen(title: 'PCOD/PCOS Guidance', content: 'Consume anti-inflammatory foods. Avoid insulin-spiking foods.')));
                },
                child: Container(
                  width: double.infinity,
                  margin: const EdgeInsets.only(bottom: 16),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border.all(color: AppTheme.primaryGreen),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('PCOD/PCOS Guidance', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkGreen)),
                      Icon(Icons.arrow_forward_ios, size: 16, color: AppTheme.darkGreen),
                    ],
                  ),
                ),
              ),
            ],

            const SizedBox(height: 16),
            const Divider(),
            const SizedBox(height: 16),

            _buildSectionTitle('AI Diet Plan Generation'),
            if (!_isDietPlanGenerated)
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _isDietPlanGenerated = true;
                    });
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('AI Diet Plan Generated!')));
                  },
                  child: const Text('Generate Diet Plan'),
                ),
              )
            else ...[
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.lightGreenAccent,
                    foregroundColor: AppTheme.darkGreen,
                  ),
                  onPressed: () {
                    Navigator.push(context, MaterialPageRoute(builder: (_) => const GeneratedDietPlanScreen()));
                  },
                  child: const Text('View Diet Plan'),
                ),
              ),
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: _showAlternatePlanDialog,
                  child: const Text('Generate Alternate Plan'),
                ),
              ),
            ],
            
          ],
        ),
      ),
    );
  }
}

class GeneratedDietPlanScreen extends StatelessWidget {
  const GeneratedDietPlanScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Diet Plan', style: TextStyle(color: AppTheme.darkGreen)),
        backgroundColor: Colors.white,
        iconTheme: const IconThemeData(color: AppTheme.darkGreen),
        elevation: 0,
      ),
      backgroundColor: Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Personalized Diet Plan', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: AppTheme.darkGreen)),
              const SizedBox(height: 16),
              const Text('Breakfast', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              const SizedBox(height: 8),
              const Text('- Oatmeal with berries\n- 1 boiled egg\n- Green tea'),
              const SizedBox(height: 16),
              const Text('Lunch', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              const SizedBox(height: 8),
              const Text('- Grilled chicken salad\n- Quinoa\n- Light vinaigrette dressing'),
              const SizedBox(height: 16),
              const Text('Dinner', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              const SizedBox(height: 8),
              const Text('- Baked salmon\n- Steamed broccoli\n- Sweet potato'),
            ],
          ),
        ),
      ),
    );
  }
}

class SpecificGuidanceScreen extends StatelessWidget {
  final String title;
  final String content;

  const SpecificGuidanceScreen({super.key, required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title, style: const TextStyle(color: AppTheme.darkGreen)),
        backgroundColor: Colors.white,
        iconTheme: const IconThemeData(color: AppTheme.darkGreen),
        elevation: 0,
      ),
      backgroundColor: Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              // ignore: deprecated_member_use
              color: AppTheme.lightGreenAccent.withOpacity(0.3),
              border: Border.all(color: AppTheme.primaryGreen),
              borderRadius: BorderRadius.circular(16),
            ),
            child: Text(content, style: const TextStyle(color: AppTheme.darkGreen, fontSize: 16, height: 1.5)),
          ),
        ),
      ),
    );
  }
}

class DietaryGuidanceDetailsScreen extends StatelessWidget {
  const DietaryGuidanceDetailsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dietary Guidance', style: TextStyle(color: AppTheme.darkGreen)),
        backgroundColor: Colors.white,
        iconTheme: const IconThemeData(color: AppTheme.darkGreen),
        elevation: 0,
      ),
      backgroundColor: Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Foods to Consume', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: AppTheme.darkGreen)),
              const SizedBox(height: 12),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  // ignore: deprecated_member_use
                  color: AppTheme.lightGreenAccent.withOpacity(0.3),
                  border: Border.all(color: AppTheme.primaryGreen),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: const Text('Oats, leafy greens, low-sodium options.', style: TextStyle(color: AppTheme.darkGreen)),
              ),
              const SizedBox(height: 24),
              const Text('Foods to Avoid', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: Colors.red)),
              const SizedBox(height: 12),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.red[50],
                  border: Border.all(color: Colors.red[200]!),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Text('High-sugar snacks, processed meats.', style: TextStyle(color: Colors.red[900])),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
