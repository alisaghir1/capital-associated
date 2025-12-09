"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";
import Head from "next/head";

const TeamMemberPage = () => {
  const params = useParams();
  const slug = params.slug;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        console.log('Fetching team member with slug:', slug);
        const { data, error } = await supabase
          .from('team')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) {
          console.error('Error fetching team member:', error);
          if (error.code === 'PGRST116') {
            // No rows returned
            notFound();
          }
        } else {
          console.log('Team member data fetched:', data);
          setMember(data);
        }
      } catch (error) {
        console.error('Error:', error);
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
        <p className="text-xl">Loading team member...</p>
      </div>
    );
  }

  if (!member) {
    notFound();
  }

  // Render sections if they exist in JSONB format
  const renderSections = () => {
    if (!member.sections || !Array.isArray(member.sections)) {
      return null;
    }

    return member.sections.map((section, index) => (
      <section key={index} className="mb-8">
        {section.title && (
          <div 
            className="text-2xl font-semibold mb-4 rich-text-content"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />
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
              alt={section.title?.replace(/<[^>]*>/g, '') || "Section image"}
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
        <title>{member.meta_title || `${member.name} - ${member.position} | Capital Associated Contracting`}</title>
        <meta
          name="description"
          content={member.meta_description || `${member.name} is ${member.position} at Capital Associated Contracting. ${member.bio || 'Learn more about our team member.'}`}
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
            <div 
              className="xl:text-4xl text-black md:text-2xl text-xl lg:text-3xl font-bold rich-text-content"
              dangerouslySetInnerHTML={{ __html: member.name }}
            />
            <p className="xl:text-2xl text-black md:text-xl lg:text-2xl text-lg mt-2">
              {member.position}
            </p>
            <p className="absolute bottom-10 left-10 text-white">
              Home <span className="text-black">/ Our Team / <span dangerouslySetInnerHTML={{ __html: member.name?.replace(/<[^>]*>/g, '') }} /></span>
            </p>
          </div>
        </div>

        {/* Member Details */}
        <div className="flex flex-col xl:flex-row gap-10 items-center rounded-2xl mt-10 px-4">
          {/* Profile Image */}
          <div className="relative xl:ml-10 mt-10 h-[60rem] xl:w-[60rem] px-5 w-full">
            <Image
              src={member.image_url || "/team/default.jpg"}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="xl:rounded-xl rounded-lg"
            />
          </div>

          {/* Member Information */}
          <div className="flex flex-col gap-5 xl:mr-10 px-5 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{member.name}</h2>
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
              <h3 className="text-xl font-semibold mb-3">Work With {member.name}</h3>
              <p className="text-gray-700 mb-4">
                Interested in working with {member.name}? Get in touch to discuss your project needs.
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