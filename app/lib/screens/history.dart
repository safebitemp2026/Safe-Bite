import 'package:flutter/material.dart';
import '../theme.dart';
import 'scan_result.dart';

// Global mock state for now
List<String> scannedProductsHistory = [];

class HistoryScreen extends StatefulWidget {
  const HistoryScreen({super.key});

  @override
  State<HistoryScreen> createState() => _HistoryScreenState();
}

class _HistoryScreenState extends State<HistoryScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan History', style: TextStyle(color: AppTheme.darkGreen)),
        backgroundColor: Colors.white,
        iconTheme: const IconThemeData(color: AppTheme.darkGreen),
        elevation: 0,
      ),
      backgroundColor: Colors.white,
      body: scannedProductsHistory.isEmpty
          ? const Center(
              child: Text(
                'No scan history yet.',
                style: TextStyle(color: Colors.grey, fontSize: 16),
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: scannedProductsHistory.length,
              itemBuilder: (context, index) {
                // Show newest first
                final product = scannedProductsHistory[scannedProductsHistory.length - 1 - index];
                return Card(
                  margin: const EdgeInsets.only(bottom: 12),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                    side: const BorderSide(color: AppTheme.primaryGreen),
                  ),
                  // ignore: deprecated_member_use
                  color: AppTheme.lightGreenAccent.withOpacity(0.3),
                  elevation: 0,
                  child: ListTile(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const ScanResultScreen()),
                      );
                    },
                    leading: const Icon(Icons.qr_code_scanner, color: AppTheme.darkGreen),
                    title: Text(
                      product.trim().isEmpty ? 'Unknown Product' : product,
                      style: const TextStyle(fontWeight: FontWeight.bold, color: AppTheme.darkGreen),
                    ),
                    subtitle: const Text('Recently scanned'),
                    trailing: const Icon(Icons.arrow_forward_ios, size: 16, color: AppTheme.darkGreen),
                  ),
                );
              },
            ),
    );
  }
}
