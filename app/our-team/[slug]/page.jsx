"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { supabase, queryWithRetry } from "../../../lib/supabase";
import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { stripHtmlTags } from "../../utils/richText";

const TeamMemberPage = () => {
  const params = useParams();
  const slug = params.slug;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const { data, error: queryError } = await queryWithRetry(
          () => supabase
            .from('team')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .single(),
          { timeoutMs: 15000, retries: 3 }
        );

        if (queryError) {
          console.warn('Team member fetch error:', queryError.message);
          if (queryError.code !== 'PGRST116') {
            setError('Unable to load team member. Please try again.');
          }
        } else if (data) {
          setMember(data);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Connection error. Please check your internet.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchTeamMember();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black mx-auto mb-4"></div>
          <p className="text-xl">Loading team member...</p>
        </div>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {error ? 'Unable to Load Team Member' : 'Team Member Not Found'}
          </h2>
          <p className="text-gray-600 mb-6">
            {error || 'The team member you are looking for does not exist.'}
          </p>
          <Link href="/our-team" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            Back to Our Team
          </Link>
        </div>
      </div>
    );
  }

  // Render sections if they exist in JSONB format
  const renderSections = () => {
    if (!member.sections || !Array.isArray(member.sections)) {
      return null;
    }

    return member.sections.map((section, index) => (
      <section key={index} className="mb-8">
        {section.title && (
          <h3 className="text-2xl font-semibold mb-4">
            {stripHtmlTags(section.title)}
          </h3>
        )}
        {section.content && (
          <div 
            className="rich-text-content prose prose-lg max-w-none text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        )}
        {section.image && (
          <div className="relative h-[400px] w-full mb-6">
            <Image
              src={section.image}
              alt={stripHtmlTags(section.title) || "Section image"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </section>
    ));
  };

  return (
    <>
      <Head>
        <title>{member.meta_title || `${stripHtmlTags(member.name)} - ${member.position} | Capital Associated Contracting`}</title>
        <meta
          name="description"
          content={member.meta_description || `${stripHtmlTags(member.name)} is ${member.position} at Capital Associated Contracting. ${member.bio || 'Learn more about our team member.'}`}
        />
        {member.meta_keywords && (
          <meta name="keywords" content={member.meta_keywords} />
        )}
      </Head>
      <div className="flex flex-col items-center justify-center border-b border-b-black pb-20">
        {/* Hero Section */}
        <div className="relative w-full h-[30rem]">
          <div className="absolute inset-0">
            <Image
              src="/main.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center">
            <h1 className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold">
              {stripHtmlTags(member.name)}
            </h1>
            <p className="xl:text-2xl text-black md:text-xl lg:text-2xl text-lg mt-2">
              {member.position}
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Team / {stripHtmlTags(member.name)}</span>
            </p>
          </div>
        </div>

        {/* Member Details */}
        <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10 px-4">
          {/* Profile Image */}
          <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
            <Image
              src={member.image_url || "/team/default.jpg"}
              alt={stripHtmlTags(member.name)}
              layout="fill"
              objectFit="cover"
              className="xl:rounded-xl rounded-lg"
            />
          </div>

          {/* Member Information */}
          <div className="flex flex-col gap-5 xl:mr-10 px-5 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{stripHtmlTags(member.name)}</h2>
              <p className="text-xl text-gray-600">{member.position}</p>
            </div>

            {/* Bio */}
            {member.bio && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <div 
                  className="rich-text-content text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              </div>
            )}



            {/* Dynamic Sections */}
            <div className="mt-8">
              {renderSections()}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-gray-100 border border-black rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Work With {stripHtmlTags(member.name)}</h3>
              <p className="text-gray-700 mb-4">
                Interested in working with {stripHtmlTags(member.name)}? Get in touch to discuss your project needs.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberPage;