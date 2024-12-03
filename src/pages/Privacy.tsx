import React from 'react';
import { Shield } from 'lucide-react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600">
          How we protect and handle your data
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Collection and Usage</h2>
          <p className="mb-4">
            At Naija Architect, we take your privacy seriously. This policy outlines how we collect,
            use, and protect your personal information when you use our platform.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email, phone number)</li>
            <li>Professional details for architectural firms</li>
            <li>Project preferences and requirements</li>
            <li>Usage data to improve our services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
          <p className="mb-4">
            We implement robust security measures to protect your data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encrypted data transmission</li>
            <li>Secure data storage</li>
            <li>Regular security audits</li>
            <li>Access controls and monitoring</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Request data correction</li>
            <li>Request data deletion</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact our Data Protection Officer at{' '}
            <a href="mailto:privacy@naijaarchitect.com" className="text-emerald-600 hover:text-emerald-700">
              privacy@naijaarchitect.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}