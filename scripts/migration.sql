-- Static Projects Migration SQL

-- Project 1: Crafting Culinary Excellence
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Crafting Culinary Excellence',
  'meatmoot',
  'We are proud to have played a key role in the development of the
              iconic Meat Moot restaurant in Dubai — a globally renowned brand
              known for its signature smoked meat dishes and high-end dining
              experience. Our team handled the complete interior fit-out and construction,
              ensuring every detail aligned with Meat Moot&apos;s international
              standards — from the premium materials to the unique architectural
              elements that define the brand. The space was designed with a strong focus on functionality,
              customer flow, and aesthetic appeal. Rich wooden textures, custom
              lighting, and industrial finishes come together to reflect the
              bold, rustic vibe of Meat Moot&apos;s global identity.',
  'Bringing the Global Meat Moot Experience to Dubai.',
  'Meat Moot is a world-renowned restaurant chain',
  'Restaurant Fit-out',
  'Dubai.',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034879/meatmoot_rbxmdd.mp4',
  '[{"title":"Crafting Culinary Excellence","content":"We are proud to have played a key role in the development of the\r\n              iconic Meat Moot restaurant in Dubai — a globally renowned brand\r\n              known for its signature smoked meat dishes and high-end dining\r\n              experience.","image":""},{"title":"Restaurant","content":"Dubai, United Arab Emirates","image":"/projects/meatmoot.jpg"},{"title":"Sustainability","content":"Strategically located in Dubai, the Meat Moot restaurant is designed\r\n            for comfort, style, and efficiency — offering a seamless experience\r\n            for guests while integrating eco-conscious solutions behind the\r\n            scenes.","image":""}]',
  true,
  true,
  1,
  'Crafting Culinary Excellence',
  'Bringing the Global Meat Moot Experience to Dubai.',
  NOW(),
  NOW()
);

-- Project 2: Meat Moot – JBR Branch
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Meat Moot – JBR Branch',
  'meatmoot-jbr',
  'Our team proudly delivered the construction of Meat Moot&apos;s JBR branch, one of Dubai&apos;s most exciting beachfront dining spots. This project reflects our commitment to quality craftsmanship and meticulous planning. The project involved transforming a shell space into a fully functional restaurant – complete with signature interiors, kitchen fit-outs, and atmospheric lighting tailored to the Meat Moot brand experience. Every element was executed to the highest standards, ensuring the branch aligns with the global expectations of Meat Moot. Our ability to adapt design into build, without losing the essence, is showcased here.',
  'Building Dubai''s Meat Moot JBR branch with passion and precision.',
  'Meat Moot Restaurant',
  'Restaurant Fit-out',
  'Dubai's Meat Moot JBR branch with passion and precision.',
  '/main.jpg',
  '',
  '[{"title":"Flavors with a Foundation.","content":"Our team proudly delivered the construction of Meat Moot&apos;s JBR branch, one of Dubai&apos;s most exciting beachfront dining spots. This project reflects our commitment to quality craftsmanship and meticulous planning.","image":"/projects/jbrm.jpg"},{"title":"Meat Moot","content":"Jumeirah Beach Residence, Dubai, UAE","image":"/projects/jbrm.jpg"},{"title":"Commitment to Quality & Style","content":"Situated at JBR&apos;s buzzing waterfront, this branch is more than a dining spot — it&apos;s an architectural showcase. Our construction approach aligned functionality with Meat Moot&apos;s distinct brand flavor.","image":""}]',
  true,
  true,
  1,
  'Meat Moot – JBR Branch',
  'Building Dubai''s Meat Moot JBR branch with passion and precision.',
  NOW(),
  NOW()
);

-- Project 3: Meat Moot – Al Khawaneej Branch
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Meat Moot – Al Khawaneej Branch',
  'meatmoot-khawaneej',
  'Our construction team was trusted to bring the Al Khawaneej branch of the globally renowned Meat Moot brand to life. From groundwork to final finishes, every step was handled with attention to detail and high standards. The project included structural works, premium interior finishes, MEP installations, and custom-fit restaurant features — all tailored to reflect the iconic Meat Moot experience in the heart of Dubai. We coordinated closely with designers and engineers to meet branding expectations and operational functionality, resulting in a space that is both aesthetically pleasing and highly efficient.',
  'We proudly delivered the Al Khawaneej branch of Meat Moot with quality and craftsmanship.',
  'Meat Moot Restaurant',
  'Restaurant Fit-out',
  'Dubai.',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034862/mkhv_tim7be.mp4',
  '[{"title":"Precision. Passion. Perfection.","content":"Our construction team was trusted to bring the Al Khawaneej branch of the globally renowned Meat Moot brand to life. From groundwork to final finishes, every step was handled with attention to detail and high standards.","image":""},{"title":"Meat Moot","content":"Dubai, United Arab Emirates","image":"/projects/mkh1.jpg"},{"title":"Built with Purpose","content":"From kitchen installations to dining ambiance, we ensured that the construction met the international standards required by the Meat Moot brand.","image":""}]',
  true,
  true,
  1,
  'Meat Moot – Al Khawaneej Branch',
  'We proudly delivered the Al Khawaneej branch of Meat Moot with quality and craftsmanship.',
  NOW(),
  NOW()
);

-- Project 4: Villa Design and Renovation
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Villa Design and Renovation',
  'Tilal-Al-Ghaf-Interior',
  'This project is a breathtaking example of modern villa interior design located in the prestigious Tilal Al Ghaf Harmony 1 community, Dubai. The villa''s thoughtfully chosen décor and simple yet minimalist design flawlessly capture the spirit of high-end lifestyle for an elite society. This villa''s design strategy aims to strike a harmonic balance between warm, inviting areas and sleek, contemporary components, making the property as beautiful as it is sensible. This villa renovation in Tilal Al Ghaf showcases how a modern design can be both sophisticated and comfortable, making it an ideal retreat for its residents. The exterior of the villa is a striking display of modern architecture, featuring expansive windows that allow natural light to flood the interior while offering panoramic views of the lush greenery surrounding the property. The façade is adorned with wooden details that add warmth and texture, creating a welcoming atmosphere even before stepping inside.',
  'Sophisticated elegance meets contemporary luxury.',
  'Tilal Al Ghaf Development',
  'Villa Construction',
  'Dubai',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034925/villa1_wcjvme.mp4',
  '[{"title":"Modern Villa Interior Design in Prestigious Community","content":"This project is a breathtaking example of modern villa interior design located in the prestigious Tilal Al Ghaf Harmony 1 community, Dubai. The villa''s thoughtfully chosen décor and simple yet minimalist design flawlessly capture the spirit of high-end lifestyle for an elite society. This villa''s design strategy aims to strike a harmonic balance between warm, inviting areas and sleek, contemporary components, making the property as beautiful as it is sensible.","image":""},{"title":"Exterior Design","content":"The exterior of the villa is a striking display of modern architecture, featuring expansive windows that allow natural light to flood the interior while offering panoramic views of the lush greenery surrounding the property. The façade is adorned with wooden details that add warmth and texture, creating a welcoming atmosphere even before stepping inside.","image":"/projects/villa-first.jpg"},{"title":"Conclusion","content":"This villa is being built to last—structurally and visually. Located\r\n            in Dubai, it reflects modern architectural style and strong\r\n            engineering principles. The project shows how smart construction can\r\n            handle the climate, soil, and fast pace of this region","image":""}]',
  true,
  true,
  2,
  'Villa Design and Renovation',
  'Sophisticated elegance meets contemporary luxury.',
  NOW(),
  NOW()
);

-- Project 5: Landscape Design Project – Tilal Al Ghaf, Dubai, UAE
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Landscape Design Project – Tilal Al Ghaf, Dubai, UAE',
  'Tilal-Al-Ghaf-Landscape',
  'Located in the prestigious Tilal Al Ghaf development in Dubai, this landscape design project exemplifies the merge of natural elegance with modern outdoor living. Commissioned by a leading contractor in the UAE, the project shows bespoke approach and premium outdoor aesthetics, customized to elevate the residential construction experience through thoughtful design with world-class quality. This comprehensive outdoor transformation was envisioned to complement the architectural charm of the villa while embracing the serene lifestyle promised by the Tilal Al Ghaf community. The project scope involved full-surface ground development, luxury hardscape features, integrated lighting, softscape detailing, and a custom-designed swimming pool. Every element was conceptualized and executed to create a seamless transition between indoor comfort and outdoor vibrancy, demonstrating our excellence in delivering integrated outdoor solutions that enhance lifestyle and property value.',
  'Where natural elegance meets modern outdoor living.',
  'Tilal Al Ghaf Development',
  'Villa Construction',
  'Dubai, UAE',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754034615/tilal-al-ghaf-landscape_mpzb99.mp4',
  '[{"title":"Landscape Design Project – Tilal Al Ghaf, Dubai, UAE","content":"Located in the prestigious Tilal Al Ghaf development in Dubai, this landscape design project exemplifies the merge of natural elegance with modern outdoor living. Commissioned by a leading contractor in the UAE, the project shows bespoke approach and premium outdoor aesthetics, customized to elevate the residential construction experience through thoughtful design with world-class quality.","image":""},{"title":"Swimming Pool","content":"Tilal Al Ghaf, Dubai, UAE","image":"/projects/tl2.png"},{"title":"Ground & Surface Development","content":"The ground development phase involved precise grading and substructure preparation to ensure long-term durability and optimal water drainage. Premium natural stone and textured tiles were selected for walkways and patio areas, offering both elegance and resilience against the region''s climate.","image":""}]',
  true,
  false,
  4,
  'Landscape Design Project – Tilal Al Ghaf, Dubai, UAE',
  'Where natural elegance meets modern outdoor living.',
  NOW(),
  NOW()
);

-- Project 6: Elite Villa Construction Project in Dubai Hills
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Elite Villa Construction Project in Dubai Hills',
  'elite-villa-construction',
  'This elite villa construction in Dubai Hills showcases a modern residential structure built with precision and high structural standards. Located in one of Dubai''s most desirable residential zones, the villa integrates durability, solid design, and efficient construction practices. The development reflects contemporary lifestyle needs and stands as a model of architectural strength and progress. From groundwork to delivery, every stage is handled with expert supervision and high precision. This project represents our standards in elite construction and design service, showcasing modern design and efficient execution in Dubai Hills'' prestigious residential community.',
  'Modern residential excellence with precision and high structural standards.',
  'Private Client',
  'Villa Construction',
  'dubai-hills_ovollu.mp4" type="video/mp4" />',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754036128/dubai-hills_ovollu.mp4',
  '[{"title":"Elite Villa Construction Project in Dubai Hills","content":"This elite villa construction in Dubai Hills showcases a modern residential structure built with precision and high structural standards. Located in one of Dubai''s most desirable residential zones, the villa integrates durability, solid design, and efficient construction practices.","image":""},{"title":"Site Preparation","content":"Dubai Hills, Dubai, UAE","image":"/projects/dh1.png"},{"title":"Structural Framework & Quality Control","content":"Heavy-duty scaffolding wrapped the project during structural work. Safe access stairways and platforms were built using timber planks. Safety signage and helmets remained mandatory throughout the site.","image":""}]',
  true,
  true,
  3,
  'Elite Villa Construction Project in Dubai Hills',
  'Modern residential excellence with precision and high structural standards.',
  NOW(),
  NOW()
);

-- Project 7: Luxury Villa Construction & Landscaping in Jumeirah, Dubai
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Luxury Villa Construction & Landscaping in Jumeirah, Dubai',
  'Jumeirah-villa-construction',
  'Capital Associated Building Contracting has successfully completed a luxury villa construction project in Jumeirah, Dubai — a prime example of modern architectural excellence blended with premium landscape and pool design. This construction demonstrates the precision and style expected in one of Dubai''s most prestigious residential areas. The villa features a symmetrical double-height façade finished with clean white cladding and expansive glass panels for natural light. The curved entrance canopy, supported by stylish dual columns, gives a contemporary twist to classical forms. This structural elegance is accentuated by black marble steps and subtle lighting elements, balancing luxury and functionality in Dubai''s most desirable residential location.',
  'Modern architectural excellence blended with premium landscape and pool design.',
  'Private Client',
  'Villa Construction',
  'Dubai',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754381919/Capital_Landscape_V3_mdl0qs.mp4',
  '[{"title":"Luxury Villa Construction & Landscaping in Jumeirah, Dubai","content":"Capital Associated Building Contracting has successfully completed a luxury villa construction project in Jumeirah, Dubai — a prime example of modern architectural excellence blended with premium landscape and pool design. This construction demonstrates the precision and style expected in one of Dubai''s most prestigious residential areas.","image":""},{"title":"Modern Pool Construction","content":"Jumeirah Villa, Dubai","image":"/projects/jv1.png"},{"title":"Landscape Design & Construction Excellence","content":"The villa''s landscaping includes a mix of hardscape and softscape zones, forming a seamless outdoor living experience. The entry pathway features a geometric paver design using light and dark marble stone, contrasted with raised planters filled with vibrant greenery and seasonal flowers.","image":""}]',
  true,
  false,
  10,
  'Luxury Villa Construction & Landscaping in Jumeirah, Dubai',
  'Modern architectural excellence blended with premium landscape and pool design.',
  NOW(),
  NOW()
);

-- Project 8: Landscape and Exterior Construction Project in Dubai
INSERT INTO projects (
  title, slug, description, short_description, client_name, project_type, location,
  hero_image_url, hero_video_url, sections, published, featured, sort_order,
  meta_title, meta_description, created_at, updated_at
) VALUES (
  'Landscape and Exterior Construction Project in Dubai',
  'Landscape-and-Exterior-Construction-Dubai',
  'A private residential villa in Dubai is undergoing a complete transformation through focused exterior and landscape construction works. The project, handled by our contracting company based in Dubai, centers around architectural definition, exterior wall treatment, boundary articulation, and strategic landscape preparation. Every element has been shaped to meet both climatic needs and residential aesthetics in the region. Stone panels in soft beige tones provide thermal benefit in the Dubai climate while maintaining a consistent, clean surface. The material also reduces glare under strong sunlight, avoiding high-reflectivity facades that can strain the surrounding environment.',
  'Complete transformation through focused exterior and landscape construction works.',
  'Capital Construction Client',
  'Villa Construction',
  'Dubai',
  '/main.jpg',
  'https://res.cloudinary.com/dqxyczrhq/video/upload/v1754563576/Copy_of_IMG_8871_naijhv.mp4',
  '[{"title":"Landscape and Exterior Construction Project in Dubai","content":"A private residential villa in Dubai is undergoing a complete transformation through focused exterior and landscape construction works. The project, handled by our contracting company based in Dubai, centers around architectural definition, exterior wall treatment, boundary articulation, and strategic landscape preparation.","image":""},{"title":"Facade Architecture","content":"Hindi Villa, Dubai, UAE","image":"/projects/hv1.png"},{"title":"Boundary Systems & Site Development","content":"Perimeter walls have been completed using blockwork, followed by surface render. Reinforcement and corner detailing have been applied to absorb Dubai''s dry conditions and high daily temperatures. Entry points have been secured using metallic gates, aligned to structural pillars, with electrical ducting and control units under preparation for future motorized access.","image":""}]',
  true,
  false,
  10,
  'Landscape and Exterior Construction Project in Dubai',
  'Complete transformation through focused exterior and landscape construction works.',
  NOW(),
  NOW()
);

