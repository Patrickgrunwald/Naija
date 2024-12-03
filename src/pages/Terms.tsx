import React from 'react';
import { FileText } from 'lucide-react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-xl text-gray-600">
          Guidelines for using Naija Architect
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Platform Usage</h2>
          <p className="mb-4">
            By using Naija Architect, you agree to these terms and conditions. Our platform connects
            architectural firms with potential clients while maintaining professional standards.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Account creation and maintenance requirements</li>
            <li>Professional conduct guidelines</li>
            <li>Content posting rules</li>
            <li>Communication standards</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <p className="mb-4">
            Users must:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate information</li>
            <li>Maintain professional conduct</li>
            <li>Respect intellectual property rights</li>
            <li>Follow platform guidelines</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Service Terms</h2>
          <p className="mb-4">
            Our service terms cover:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Platform availability and maintenance</li>
            <li>Payment and refund policies</li>
            <li>Dispute resolution process</li>
            <li>Service modifications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:legal@naijaarchitect.com" className="text-emerald-600 hover:text-emerald-700">
              legal@naijaarchitect.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}