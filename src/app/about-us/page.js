import Link from 'next/link';
import React from 'react';

export default function AboutUs() {
  return (
    <div>
      <section className="fade-in max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About KindQuest</h1>
        <p className="text-lg mb-6 text-gray-700">KindQuest is a community-powered platform designed to connect passionate volunteers with impactful projects in their local area and beyond. Our mission is to make doing good easier, more visible, and more collaborative.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Why We Exist</h2>
        <p className="text-gray-700 mb-6">Whether you’re an organization seeking help, a volunteer looking to give back, or a community leader with an idea—you belong here.</p>
        <p className="text-gray-700 mb-6">KindQuest was created to streamline how people connect with causes that matter.</p>
        <p className="text-gray-700 mb-6">We believe in the power of everyday kindness to create lasting change.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">How It Works</h2>
        <ul className="list-disc list-inside text-left text-gray-700 max-w-xl mx-auto">
          <li>Explore or start projects that address local needs</li>
          <li>Sign up to volunteer for specific tasks</li>
          <li>Track progress and celebrate completed projects</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Vision</h2>
        <p className="text-gray-700 mb-6">We envision a world where communities are empowered to take initiative, solve problems, and support one another—one project at a time. KindQuest is here to be the bridge between intention and action.</p>

        <div className="mt-10">
          <Link className="nav-link" href="/contributors">
            Contributors
          </Link>
        </div>
      </section>
    </div>
  );
}
