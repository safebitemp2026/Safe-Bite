import 'package:flutter/material.dart';
import '../theme.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  String _dietaryPreference = 'Not Enterted';
  String _height = 'Not Enterted';
  String _weight = 'Not Enterted';
  String _age = 'Not Enterted';
  List<String> _medicalConditions = [];
  String _healthReport = 'No report uploaded';
  String _allergyReport = 'No report uploaded';
  bool _isPregnant = false;
  bool _wantPcosWarnings = false;

  void _showDietaryPreferenceDialog() {
    bool isCustom = !['Non Vegetarian', 'Vegetarian', 'Vegan'].contains(_dietaryPreference);
    String selectedRadio = isCustom ? 'Other' : _dietaryPreference;
    TextEditingController customCtrl = TextEditingController(text: isCustom ? _dietaryPreference : '');

    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            return AlertDialog(
              title: const Text('Dietary preference'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: ['Non Vegetarian', 'Vegetarian', 'Vegan', 'Other'].map((pref) {
                  return Column(
                    children: [
                      ListTile(
                        title: Text(pref),
                        leading: Radio<String>(
                          value: pref,
                          // ignore: deprecated_member_use
                          groupValue: selectedRadio,
                          // ignore: deprecated_member_use
                          onChanged: (val) {
                            setStateDialog(() => selectedRadio = val.toString());
                          },
                          activeColor: AppTheme.primaryGreen,
                        ),
                        onTap: () {
                          setStateDialog(() => selectedRadio = pref);
                        },
                      ),
                      if (pref == 'Other' && selectedRadio == 'Other')
                        Padding(
                          padding: const EdgeInsets.only(left: 72.0, right: 24.0, bottom: 8.0),
                          child: TextField(
                            controller: customCtrl,
                            decoration: const InputDecoration(
                              hintText: 'Type your preference...',
                              focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: AppTheme.primaryGreen)),
                            ),
                            autofocus: true,
                          ),
                        ),
                    ],
                  );
                }).toList(),
              ),
              actions: [
                TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
                TextButton(
                  onPressed: () {
                    setState(() {
                      if (selectedRadio == 'Other' && customCtrl.text.isNotEmpty) {
                        _dietaryPreference = customCtrl.text;
                      } else {
                        _dietaryPreference = selectedRadio;
                      }
                    });
                    Navigator.pop(context);
                  },
                  child: const Text('Save', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
                ),
              ],
            );
          },
        );
      },
    );
  }

  void _showHeightWeightDialog() {
    TextEditingController heightCtrl = TextEditingController(text: _height);
    TextEditingController weightCtrl = TextEditingController(text: _weight);
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Height & weight'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Height (cm)', style: TextStyle(fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              TextField(
                controller: heightCtrl,
                decoration: InputDecoration(
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.primaryGreen)),
                ),
                keyboardType: TextInputType.number,
              ),
              const SizedBox(height: 16),
              const Text('Weight (kg)', style: TextStyle(fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              TextField(
                controller: weightCtrl,
                decoration: InputDecoration(
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.primaryGreen)),
                ),
                keyboardType: TextInputType.number,
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
            TextButton(
              onPressed: () {
                setState(() {
                  _height = heightCtrl.text;
                  _weight = weightCtrl.text;
                });
                Navigator.pop(context);
              },
              child: const Text('Save', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
            ),
          ],
        );
      },
    );
  }

  void _showAgeDialog() {
    TextEditingController ageCtrl = TextEditingController(text: _age);
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Edit Age'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Age', style: TextStyle(fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              TextField(
                controller: ageCtrl,
                decoration: InputDecoration(
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.borderColor)),
                  focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: AppTheme.primaryGreen)),
                ),
                keyboardType: TextInputType.number,
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
            TextButton(
              onPressed: () {
                setState(() => _age = ageCtrl.text);
                Navigator.pop(context);
              },
              child: const Text('Save', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
            ),
          ],
        );
      },
    );
  }

  void _showMedicalConditionDialog() {
    List<String> currentConditions = List.from(_medicalConditions);
    List<String> predefined = ['No condition', 'Diabetes', 'Hypertension', 'Heart disease', 'Kidney disease'];
    String customCond = '';
    bool hasOther = false;
    for (String c in currentConditions) {
      if (!predefined.contains(c)) {
        hasOther = true;
        customCond = c;
      }
    }
    if (hasOther) {
      currentConditions.remove(customCond);
      currentConditions.add('Other');
    }
    TextEditingController customCtrl = TextEditingController(text: customCond);

    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            return AlertDialog(
              title: const Text('Medical conditions'),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: ['No condition', 'Diabetes', 'Hypertension', 'Heart disease', 'Kidney disease', 'Other'].map((cond) {
                    bool isSelected = currentConditions.contains(cond);
                    return Column(
                      children: [
                        CheckboxListTile(
                          title: Text(cond),
                          value: isSelected,
                          onChanged: (val) {
                            setStateDialog(() {
                              if (val == true) {
                                if (cond == 'No condition') {
                                  currentConditions.clear();
                                  customCtrl.clear();
                                } else {
                                  currentConditions.remove('No condition');
                                }
                                currentConditions.add(cond);
                              } else {
                                currentConditions.remove(cond);
                              }
                            });
                          },
                          activeColor: AppTheme.primaryGreen,
                        ),
                        if (cond == 'Other' && isSelected)
                          Padding(
                            padding: const EdgeInsets.only(left: 72.0, right: 24.0, bottom: 8.0),
                            child: TextField(
                              controller: customCtrl,
                              decoration: const InputDecoration(
                                hintText: 'Type your condition...',
                                focusedBorder: UnderlineInputBorder(borderSide: BorderSide(color: AppTheme.primaryGreen)),
                              ),
                              autofocus: true,
                            ),
                          ),
                      ],
                    );
                  }).toList(),
                ),
              ),
              actions: [
                TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
                TextButton(
                  onPressed: () {
                    setState(() {
                      if (currentConditions.contains('Other') && customCtrl.text.isNotEmpty) {
                        currentConditions.remove('Other');
                        currentConditions.add(customCtrl.text);
                      } else if (currentConditions.contains('Other')) {
                         currentConditions.remove('Other');
                      }
                      _medicalConditions = currentConditions;
                    });
                    Navigator.pop(context);
                  },
                  child: const Text('Save', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
                ),
              ],
            );
          },
        );
      },
    );
  }

  void _showReportsDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Upload Reports'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ListTile(
                leading: const Icon(Icons.picture_as_pdf, color: Colors.red),
                title: const Text('Health Report'),
                subtitle: Text(_healthReport),
                trailing: const Icon(Icons.upload),
                onTap: () {
                  setState(() => _healthReport = 'health_report_2026.pdf');
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Health report uploaded')));
                },
              ),
              ListTile(
                leading: const Icon(Icons.picture_as_pdf, color: Colors.red),
                title: const Text('Allergy Report'),
                subtitle: Text(_allergyReport),
                trailing: const Icon(Icons.upload),
                onTap: () {
                  setState(() => _allergyReport = 'allergy_report_latest.pdf');
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Allergy report uploaded')));
                },
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: const Text('Close')),
          ],
        );
      },
    );
  }

  void _showFemaleHealthDialog() {
    bool tempPregnant = _isPregnant;
    bool tempPcos = _wantPcosWarnings;
    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            return AlertDialog(
              title: const Text('Female health profile'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SwitchListTile(
                    title: const Text('Are you pregnant?'),
                    value: tempPregnant,
                    onChanged: (val) {
                      setStateDialog(() => tempPregnant = val);
                    },
                    // ignore: deprecated_member_use
                    activeColor: AppTheme.primaryGreen,
                  ),
                  SwitchListTile(
                    title: const Text('Would you like to get PCOS specific warnings for products?'),
                    value: tempPcos,
                    onChanged: (val) {
                      setStateDialog(() => tempPcos = val);
                    },
                    // ignore: deprecated_member_use
                    activeColor: AppTheme.primaryGreen,
                  ),
                ],
              ),
              actions: [
                TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
                TextButton(
                  onPressed: () {
                    setState(() {
                      _isPregnant = tempPregnant;
                      _wantPcosWarnings = tempPcos;
                    });
                    Navigator.pop(context);
                  },
                  child: const Text('Save', style: TextStyle(color: AppTheme.primaryGreen, fontWeight: FontWeight.bold)),
                ),
              ],
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text('Settings', style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkGreen)),
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: AppTheme.darkGreen),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            children: [
              Row(
              children: [
                Container(
                  width: 60,
                  height: 60,
                  decoration: const BoxDecoration(
                    color: AppTheme.lightGreenAccent,
                    shape: BoxShape.circle,
                  ),
                  alignment: Alignment.center,
                  child: const Icon(Icons.person, size: 36, color: AppTheme.darkGreen),
                ),
                const SizedBox(width: 16),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text('User Name', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                    Text('User E-Mail id', style: TextStyle(color: Colors.grey)),
                  ],
                ),
              ],
            ),

            const Divider(),
            ListTile(
              title: const Text('Age'),
              subtitle: Text(_age == 'Not Enterted' ? 'Not Enterted' : '$_age years'),
              trailing: const Icon(Icons.chevron_right),
              onTap: _showAgeDialog,
            ),
            const Divider(),
            ListTile(
              title: const Text('Height & weight'),
              subtitle: Text(_height == 'Not Enterted' ? 'Not Enterted' : '$_height cm, $_weight kg'),
              trailing: const Icon(Icons.chevron_right),
              onTap: _showHeightWeightDialog,
            ),
            const Divider(),
            ListTile(
              title: const Text('Dietary preference'),
              subtitle: Text(_dietaryPreference),
              trailing: const Icon(Icons.chevron_right),
              onTap: _showDietaryPreferenceDialog,
            ),
            if (globalGender == 'Female') ...[
              const Divider(),
              ListTile(
                title: const Text('Female health'),
                subtitle: const Text('Pregnancy & PCOS settings'),
                trailing: const Icon(Icons.chevron_right),
                onTap: _showFemaleHealthDialog,
              ),
            ],
            const Divider(),
            ListTile(
              title: const Text('Medical conditions'),
              subtitle: Text(_medicalConditions.isEmpty ? 'None' : _medicalConditions.join(', ')),
              trailing: const Icon(Icons.chevron_right),
              onTap: _showMedicalConditionDialog,
            ),
            const Divider(),
            ListTile(
              title: const Text('Health & Allergy reports'),
              subtitle: const Text('Manage your uploaded reports'),
              trailing: const Icon(Icons.chevron_right),
              onTap: _showReportsDialog,
            ),
            const Divider(),
            ListTile(
              leading: const Icon(Icons.logout, color: Colors.orange),
              title: const Text('Log out', style: TextStyle(color: Colors.orange, fontWeight: FontWeight.bold)),
              onTap: () => _showLogoutDialog(context),
            ),
            const SizedBox(height: 32),
            GestureDetector(
              onTap: () => _showDeleteDialog(context),
              child: Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.red),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Row(
                  children: [
                    const Icon(Icons.delete_outline, color: Colors.red),
                    const SizedBox(width: 16),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text('Delete account', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                        Text('Permanently delete all custom user metadata', style: TextStyle(color: Colors.grey, fontSize: 10)),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    ));
  }

  void _showLogoutDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Log out'),
        content: const Text('Are you sure you want to log out?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              Navigator.pushReplacementNamed(context, '/');
            },
            child: const Text('Log out', style: TextStyle(color: Colors.orange)),
          ),
        ],
      ),
    );
  }

  void _showDeleteDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Account'),
        content: const Text('Are you sure you want to permanently delete your account? This cannot be undone.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              Navigator.pushReplacementNamed(context, '/');
            },
            child: const Text('Delete', style: TextStyle(color: Colors.red)),
          ),
        ],
      ),
    );
  }
}
