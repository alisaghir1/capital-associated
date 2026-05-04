'use client';

import React, { useState, useEffect } from 'react';
import { supabase, queryWithRetry } from '../../lib/supabase';
import Link from 'next/link';
import { stripHtmlTags } from '../utils/richText';

export default function CareerLayout() {
  const [careers, setCareers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const { data, error } = await queryWithRetry(
        () => supabase
          .from('careers')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false }),
        { timeoutMs: 15000, retries: 3 }
      );

      if (error) {
        console.warn('Error fetching careers:', error.message);
        setError('Unable to load career listings. Please try again later.');
      }
      
      setCareers(data || []);
    } catch (err) {
      console.error('Error fetching careers:', err);
      setError('Connection error. Please check your internet and try again.');
      setCareers([]);
    }
  };

  if (careers.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Careers at Capital Associated Building Contracting
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
              Build With Us Across the UAE
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Capital Associated Building Contracting LLC is a licensed general contractor delivering villa construction, commercial builds, and turnkey projects across Dubai, Abu Dhabi, and Sharjah. We have completed over 100 projects covering more than 750,000 sq ft of built-up area.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-semibold">
              We regularly hire for the following roles:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed mb-8 space-y-2 pl-2">
              <li>Project Managers</li>
              <li>Site Engineers (Civil / Structural)</li>
              <li>Quantity Surveyors</li>
              <li>Estimation Engineers</li>
              <li>HSE Officers</li>
              <li>Document Controllers</li>
              <li>Skilled Tradespeople (Formwork, Rebar, Finishing)</li>
            </ul>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              If you have experience in UAE construction and want to work with a contractor that delivers across residential, commercial, and mixed-use projects &mdash; send your CV.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              We review all applications and reach out when a role matches your experience and qualifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-gray-100">
              <a
                href="mailto:careers@capitalassociated.com"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                Send Your Resume
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pt-32 pb-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Our <span className="text-gray-300">Elite Team</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Shape the future of construction in Dubai. Build your career with industry leaders 
            who value innovation, excellence, and professional growth.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Career Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {careers.map((career) => (
            <div key={career.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:-translate-y-2">
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
                    {stripHtmlTags(career.job_title)}
                  </h3>
                  
                  {career.department && (
                    <div className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full font-medium">
                      {career.department}
                    </div>
                  )}
                </div>

                {/* Location & Type */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {career.location && (
                    <span className="inline-flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <svg className="w-4 h-4 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {career.location}
                    </span>
                  )}
                  {career.employment_type && (
                    <span className="inline-flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <svg className="w-4 h-4 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0710 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0710 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {career.employment_type}
                    </span>
                  )}
                </div>

                {/* Experience Level */}
                {career.experience_level && (
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-700">Experience Level: </span>
                    <span className="text-sm text-black font-medium">{career.experience_level}</span>
                  </div>
                )}

                {/* Description */}
                {career.job_description && (
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-4">
                    {career.job_description.length > 120 
                      ? career.job_description.substring(0, 120) + '...'
                      : career.job_description
                    }
                  </p>
                )}

                {/* Salary */}
                {career.salary_range && (
                  <div className="mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-green-800">
                         Salary: {career.salary_range}
                      </p>
                    </div>
                  </div>
                )}

                {/* Deadline */}
                {career.application_deadline && new Date(career.application_deadline) > new Date() && (
                  <div className="mb-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-orange-800">
                         Apply by: {new Date(career.application_deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <Link
                    href={`/career/${career.slug}`}
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-gray-500 font-medium">
                    Posted {new Date(career.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-black rounded-3xl shadow-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 1.208c.945.108 1.92.108 2.865 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Perfect Match?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always interested in hearing from talented professionals who share our passion for excellence. 
              Send us your resume and we'll keep you in mind for future opportunities that match your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@capitalassociated.com"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 1.208c.945.108 1.92.108 2.865 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Your Resume
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.487L3 21l2.487-5.094A8.959 8.959 0 713 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
