import 'package:flutter/material.dart';
import '../theme.dart';

class AiAssistantScreen extends StatelessWidget {
  const AiAssistantScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AI assistant')),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(24),
            ),
          ),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: const BoxDecoration(
              border: Border(top: BorderSide(color: AppTheme.borderColor)),
            ),
            child: Row(
              children: [
                const Icon(Icons.mic_none, color: Colors.grey),
                const SizedBox(width: 16),
                const Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'Ask anything...',
                      border: InputBorder.none,
                      filled: false,
                    ),
                  ),
                ),
                IconButton(icon: const Icon(Icons.send_outlined, color: AppTheme.primaryGreen), onPressed: () {}),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
