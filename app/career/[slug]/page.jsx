'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase, queryWithRetry } from '../../../lib/supabase';
import Link from 'next/link';
import { stripHtmlTags } from '../../utils/richText';

export default function CareerDetailPage() {
  const params = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      fetchCareer();
    }
  }, [params.slug]);

  const fetchCareer = async () => {
    try {
      const { data, error: queryError } = await queryWithRetry(
        () => supabase
          .from('careers')
          .select('*')
          .eq('slug', params.slug)
          .eq('published', true)
          .single(),
        { timeoutMs: 15000, retries: 3 }
      );

      if (queryError) {
        console.warn('Career fetch error:', queryError.message);
        if (queryError.code !== 'PGRST116') {
          setError('Unable to load career details. Please try again.');
        }
      } else if (data) {
        setCareer(data);
      }
    } catch (err) {
      console.error('Error fetching career:', err);
      setError('Connection error. Please check your internet.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 pt-32 pb-12">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
            <p className="text-lg text-black font-medium">Loading career details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !career) {
    return (
      <div className="min-h-screen bg-slate-100 pt-32 pb-12">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-md p-12 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="w-20 h-20 bg-black rounded-full mx-auto mb-8 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.591-2.709M15 11.5a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black mb-4">
              {error ? 'Unable to Load Career' : 'Career Not Found'}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {error || "The job posting you're looking for doesn't exist or is no longer available."}
            </p>
            <Link
              href="/career"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              View All Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pt-32 pb-16">
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/career"
            className="inline-flex items-center bg-white border border-gray-200 px-4 py-3 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 font-medium group"
          >
            <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black group-hover:-translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm text-gray-600 group-hover:text-black transition-colors duration-200">Back to Careers</span>
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-black mb-3">
                {stripHtmlTags(career.job_title)}
              </h1>
              {career.department && (
                <div className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full font-medium mb-4">
                  {career.department}
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-2">
                Posted {new Date(career.created_at).toLocaleDateString()}
              </p>
              {career.application_deadline && new Date(career.application_deadline) > new Date() && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                  <p className="text-sm text-orange-800 font-medium">
                    Apply by: {new Date(career.application_deadline).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {career.location && (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{career.location}</p>
                </div>
              </div>
            )}
            {career.employment_type && (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Employment Type</p>
                  <p className="font-medium">{career.employment_type}</p>
                </div>
              </div>
            )}
            {career.experience_level && (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500">Experience Level</p>
                  <p className="font-medium">{career.experience_level}</p>
                </div>
              </div>
            )}
          </div>

          {career.salary_range && (
            <div className="mb-8">
              <p className="text-lg font-semibold text-green-600">
                Salary: {career.salary_range}
              </p>
            </div>
          )}

          {/* Apply Button */}
          <div className="text-center">
            <a
              href={`mailto:careers@capitalassociated.com?subject=Application for ${stripHtmlTags(career.job_title)}&body=Dear Hiring Team,%0A%0AI am interested in applying for the ${stripHtmlTags(career.job_title)} position.%0A%0APlease find my resume attached.%0A%0AThank you for your consideration.%0A%0ABest regards`}
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Job Description */}
        {career.job_description && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Job Description</h2>
            <div 
              className="rich-text-content prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: career.job_description }}
            />
          </div>
        )}

        {/* Requirements */}
        {career.requirements && career.requirements.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              {career.requirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Responsibilities */}
        {career.responsibilities && career.responsibilities.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              {career.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-700">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {career.benefits && career.benefits.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              {career.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Apply Again */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          <h2 className="text-xl font-bold text-black mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-6">
            Join our team and be part of shaping the future of construction in Dubai and the UAE.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:careers@capitalassociated.com?subject=Application for ${stripHtmlTags(career.job_title)}&body=Dear Hiring Team,%0A%0AI am interested in applying for the ${stripHtmlTags(career.job_title)} position.%0A%0APlease find my resume attached.%0A%0AThank you for your consideration.%0A%0ABest regards`}
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl mr-4"
            >
              Apply Now
            </a>
            <Link
              href="/career"
              className="inline-block border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium"
            >
              View Other Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}