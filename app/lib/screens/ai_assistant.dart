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
              children: [
                _buildChatBubble('Is this safe during pregnancy?', true),
                _buildChatBubble('Check the label I just scanned', true),
                _buildChatBubble('Flagged — contains MSG. Best to avoid for now.', false),
              ],
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

  Widget _buildChatBubble(String text, bool isUser) {
    return Align(
      alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: isUser ? AppTheme.darkGreen : AppTheme.lightGreenAccent,
          borderRadius: BorderRadius.circular(16).copyWith(
            bottomRight: isUser ? const Radius.circular(0) : const Radius.circular(16),
            bottomLeft: !isUser ? const Radius.circular(0) : const Radius.circular(16),
          ),
        ),
        child: Text(
          text,
          style: TextStyle(color: isUser ? Colors.white : AppTheme.darkGreen),
        ),
      ),
    );
  }
}
