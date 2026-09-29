import 'package:flutter/material.dart';
import '../theme.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(),
              Container(
                width: 80,
                height: 80,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: AppTheme.primaryGreen, width: 2),
                  color: AppTheme.lightGreenAccent,
                ),
                child: const Icon(Icons.shield_outlined, size: 40, color: AppTheme.primaryGreen),
              ),
              const SizedBox(height: 32),
              Text('Safe Bite', style: Theme.of(context).textTheme.displayLarge),
              const SizedBox(height: 16),
              Text(
                'Scan any food. Know what\'s really inside it.',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Navigator.pushNamed(context, '/signin'),
                  child: const Text('Get started'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class SignInScreen extends StatelessWidget {
  const SignInScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(),
              Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: AppTheme.primaryGreen, width: 2),
                ),
                child: const Icon(Icons.shield_outlined, size: 30, color: AppTheme.primaryGreen),
              ),
              const SizedBox(height: 32),
              Text('Sign in to continue', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 16),
              Text(
                'One tap. No password, no OTP, no email step.',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(color: Colors.grey[600]),
              ),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: () => Navigator.pushNamed(context, '/basic_details'),
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    side: const BorderSide(color: AppTheme.darkGreen),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  ),
                  child: const Text('Continue with Google', style: TextStyle(color: AppTheme.darkGreen, fontSize: 16, fontWeight: FontWeight.bold)),
                ),
              ),
              const SizedBox(height: 16),
              Text(
                'By signing in, you agree to our Terms and Privacy Policy',
                style: TextStyle(fontSize: 12, color: Colors.grey[500]),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// Helper for Progress Dots
class ProgressDots extends StatelessWidget {
  final int currentIndex;
  final int total;
  const ProgressDots({super.key, required this.currentIndex, this.total = 5});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(total, (index) {
        return Container(
          margin: const EdgeInsets.symmetric(horizontal: 4),
          width: 8,
          height: 8,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: index == currentIndex ? AppTheme.primaryGreen : AppTheme.borderColor,
          ),
        );
      }),
    );
  }
}

class BasicDetailsScreen extends StatefulWidget {
  const BasicDetailsScreen({super.key});
  @override
  State<BasicDetailsScreen> createState() => _BasicDetailsScreenState();
}

class _BasicDetailsScreenState extends State<BasicDetailsScreen> {
  String? selectedGender;
  String _name = '';
  String _age = '';
  String _weight = '';
  String _height = '';

  bool get _isFormValid => _name.isNotEmpty && _age.isNotEmpty && _weight.isNotEmpty && _height.isNotEmpty && selectedGender != null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const ProgressDots(currentIndex: 0),
              const SizedBox(height: 32),
              Text('Basic details', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 24),
              TextField(decoration: const InputDecoration(labelText: 'Full name'), onChanged: (val) => setState(() => _name = val.trim())),
              const SizedBox(height: 16),
              TextField(decoration: const InputDecoration(labelText: 'Age'), keyboardType: TextInputType.number, onChanged: (val) => setState(() => _age = val.trim())),
              const SizedBox(height: 16),
              Row(
                children: [
                  Expanded(child: TextField(decoration: const InputDecoration(labelText: 'Weight (kg)'), keyboardType: TextInputType.number, onChanged: (val) => setState(() => _weight = val.trim()))),
                  const SizedBox(width: 16),
                  Expanded(child: TextField(decoration: const InputDecoration(labelText: 'Height (cm)'), keyboardType: TextInputType.number, onChanged: (val) => setState(() => _height = val.trim()))),
                ],
              ),
              const SizedBox(height: 24),
              const Text('Gender', style: TextStyle(fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              Row(
                children: ['Female', 'Male'].map((g) {
                  bool isSelected = selectedGender == g;
                  return Padding(
                    padding: const EdgeInsets.only(right: 8.0),
                    child: ChoiceChip(
                      label: Text(g),
                      selected: isSelected,
                      onSelected: (val) => setState(() => selectedGender = g),
                      selectedColor: AppTheme.primaryGreen,
                      labelStyle: TextStyle(color: isSelected ? Colors.white : AppTheme.darkGreen),
                    ),
                  );
                }).toList(),
              ),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: !_isFormValid ? null : () {
                    if (selectedGender == 'Female') {
                      Navigator.pushNamed(context, '/female_health');
                    } else {
                      Navigator.pushNamed(context, '/dietary_preference');
                    }
                  },
                  child: const Text('Continue'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class FemaleHealthScreen extends StatefulWidget {
  const FemaleHealthScreen({super.key});
  @override
  State<FemaleHealthScreen> createState() => _FemaleHealthScreenState();
}

class _FemaleHealthScreenState extends State<FemaleHealthScreen> {
  bool isPregnant = false;
  bool wantPcosWarnings = false;

  Widget buildToggle(String title, bool value, Function(bool) onChanged) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: GestureDetector(
                onTap: () => onChanged(true),
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                    color: value ? AppTheme.primaryGreen : Colors.white,
                    border: Border.all(color: value ? AppTheme.primaryGreen : AppTheme.borderColor),
                    borderRadius: const BorderRadius.horizontal(left: Radius.circular(20)),
                  ),
                  alignment: Alignment.center,
                  child: Text('Yes', style: TextStyle(color: value ? Colors.white : AppTheme.darkGreen)),
                ),
              ),
            ),
            Expanded(
              child: GestureDetector(
                onTap: () => onChanged(false),
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                    color: !value ? AppTheme.primaryGreen : Colors.white,
                    border: Border.all(color: !value ? AppTheme.primaryGreen : AppTheme.borderColor),
                    borderRadius: const BorderRadius.horizontal(right: Radius.circular(20)),
                  ),
                  alignment: Alignment.center,
                  child: Text('No', style: TextStyle(color: !value ? Colors.white : AppTheme.darkGreen)),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const ProgressDots(currentIndex: 1),
              const SizedBox(height: 32),
              Text('Female health', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 32),
              buildToggle('Currently pregnant?', isPregnant, (v) => setState(() => isPregnant = v)),
              const SizedBox(height: 32),
              buildToggle('Do you like to get warnings regarding PCOD / PCOS?', wantPcosWarnings, (v) => setState(() => wantPcosWarnings = v)),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Navigator.pushNamed(context, '/dietary_preference'),
                  child: const Text('Continue'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class DietaryPreferenceScreen extends StatefulWidget {
  const DietaryPreferenceScreen({super.key});
  @override
  State<DietaryPreferenceScreen> createState() => _DietaryPreferenceScreenState();
}

class _DietaryPreferenceScreenState extends State<DietaryPreferenceScreen> {
  String? selected;
  final TextEditingController _otherController = TextEditingController();

  @override
  void dispose() {
    _otherController.dispose();
    super.dispose();
  }

  Widget buildCard(String title) {
    bool isSelected = selected == title;
    
    if (title == 'Other' && isSelected) {
      return Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 4),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: AppTheme.primaryGreen, width: 2),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Expanded(
              child: TextField(
                controller: _otherController,
                decoration: const InputDecoration(
                  hintText: 'Type your preference...',
                  border: InputBorder.none,
                ),
                autofocus: true,
              ),
            ),
            const Icon(Icons.check_circle, color: AppTheme.primaryGreen),
          ],
        ),
      );
    }

    return GestureDetector(
      onTap: () => setState(() => selected = title),
      child: Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: isSelected ? AppTheme.primaryGreen : AppTheme.borderColor, width: isSelected ? 2 : 1),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            const Spacer(),
            if (isSelected) const Icon(Icons.check_circle, color: AppTheme.primaryGreen),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const ProgressDots(currentIndex: 2),
              const SizedBox(height: 32),
              Text('Dietary preference', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 24),
              buildCard('Non Vegetarian'),
              buildCard('Vegetarian'),
              buildCard('Other'),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: selected == null ? null : () => Navigator.pushNamed(context, '/medical_conditions'),
                  child: const Text('Continue'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class MedicalConditionsScreen extends StatefulWidget {
  const MedicalConditionsScreen({super.key});
  @override
  State<MedicalConditionsScreen> createState() => _MedicalConditionsScreenState();
}

class _MedicalConditionsScreenState extends State<MedicalConditionsScreen> {
  List<String> conditions = ['No condition', 'Diabetes', 'Hypertension', 'Heart disease', 'Kidney disease', 'Other'];
  List<String> selected = [];
  final TextEditingController _otherController = TextEditingController();

  @override
  void dispose() {
    _otherController.dispose();
    super.dispose();
  }

  Widget buildCard(String title) {
    bool isSelected = selected.contains(title);
    
    if (title == 'Other' && isSelected) {
      return Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 4),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: AppTheme.primaryGreen, width: 2),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Expanded(
              child: TextField(
                controller: _otherController,
                decoration: const InputDecoration(
                  hintText: 'Type your condition...',
                  border: InputBorder.none,
                ),
                autofocus: true,
              ),
            ),
            IconButton(
              icon: const Icon(Icons.close),
              onPressed: () {
                setState(() {
                  selected.remove('Other');
                  _otherController.clear();
                });
              },
            ),
            const Icon(Icons.check_circle, color: AppTheme.primaryGreen),
          ],
        ),
      );
    }

    return GestureDetector(
      onTap: () {
        setState(() {
          if (isSelected) {
            selected.remove(title);
            if (title == 'Other') _otherController.clear();
          } else {
            if (title == 'No condition') {
              selected.clear();
              _otherController.clear();
            } else {
              selected.remove('No condition');
            }
            selected.add(title);
          }
        });
      },
      child: Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: isSelected ? AppTheme.primaryGreen : AppTheme.borderColor, width: isSelected ? 2 : 1),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            const Spacer(),
            if (isSelected) const Icon(Icons.check_circle, color: AppTheme.primaryGreen),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const ProgressDots(currentIndex: 3),
              const SizedBox(height: 32),
              Text('Medical conditions', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 24),
              Expanded(
                child: ListView(
                  padding: EdgeInsets.zero,
                  children: conditions.map((c) => buildCard(c)).toList(),
                ),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: selected.isEmpty ? null : () => Navigator.pushNamed(context, '/upload_reports'),
                  child: const Text('Continue'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class UploadReportsScreen extends StatefulWidget {
  const UploadReportsScreen({super.key});

  @override
  State<UploadReportsScreen> createState() => _UploadReportsScreenState();
}

class _UploadReportsScreenState extends State<UploadReportsScreen> {
  bool healthUploaded = false;
  bool allergyUploaded = false;

  Widget buildUploadBox(String title, String subtitle, bool isUploaded, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: isUploaded ? AppTheme.lightGreenAccent : Colors.white,
          border: Border.all(color: isUploaded ? AppTheme.primaryGreen : AppTheme.borderColor, width: isUploaded ? 2 : 1),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Column(
          children: [
            Icon(isUploaded ? Icons.check_circle : Icons.upload_file, color: AppTheme.primaryGreen, size: 40),
            const SizedBox(height: 12),
            Text(isUploaded ? '${title.split(' ').first} report (Uploaded)' : title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
            const SizedBox(height: 4),
            Text(isUploaded ? 'File attached successfully' : subtitle, style: const TextStyle(color: Colors.grey, fontSize: 12)),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    bool canContinue = healthUploaded || allergyUploaded;
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const ProgressDots(currentIndex: 4),
              const SizedBox(height: 32),
              Text('Upload reports', style: Theme.of(context).textTheme.displayMedium),
              const SizedBox(height: 24),
              buildUploadBox('Health report (PDF)', 'Upload latest medical test results', healthUploaded, () {
                setState(() => healthUploaded = !healthUploaded);
              }),
              const SizedBox(height: 16),
              buildUploadBox('Allergy report (PDF)', 'Upload test results', allergyUploaded, () {
                setState(() => allergyUploaded = !allergyUploaded);
              }),
              const Spacer(),
              Row(
                children: [
                  TextButton(onPressed: () => Navigator.pushNamed(context, '/profile_setup'), child: const Text('Skip', style: TextStyle(color: Colors.grey))),
                  const Spacer(),
                  ElevatedButton(
                    onPressed: canContinue ? () => Navigator.pushNamed(context, '/profile_setup') : null,
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 24),
                      child: Text('Continue'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ProfileSetupScreen extends StatefulWidget {
  const ProfileSetupScreen({super.key});

  @override
  State<ProfileSetupScreen> createState() => _ProfileSetupScreenState();
}

class _ProfileSetupScreenState extends State<ProfileSetupScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 2), () {
      if (mounted) {
        Navigator.pushReplacementNamed(context, '/home');
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const CircularProgressIndicator(color: AppTheme.primaryGreen),
            const SizedBox(height: 24),
            Text('Setting up your profile', style: Theme.of(context).textTheme.displayMedium),
            const SizedBox(height: 8),
            const Text('This only takes a moment', style: TextStyle(color: Colors.grey)),
          ],
        ),
      ),
    );
  }
}
