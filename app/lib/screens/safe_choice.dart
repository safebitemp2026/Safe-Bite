import 'package:flutter/material.dart';

class SafeChoiceScreen extends StatelessWidget {
  const SafeChoiceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Safe Choice')),
      body: const Center(child: Text('Recommendations will appear here.')),
    );
  }
}
