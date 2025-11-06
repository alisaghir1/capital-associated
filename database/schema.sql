-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  hero_image_url VARCHAR(500),
  sections JSONB DEFAULT '[]'::jsonb, -- Array of sections with title, content, and optional image
  author VARCHAR(100) DEFAULT 'admin',
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(500),
  icon_url VARCHAR(500),
  hero_image_url VARCHAR(500),
  sections JSONB DEFAULT '[]'::jsonb, -- Array of sections with title, content, and optional image
  features TEXT[],
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(500),
  client_name VARCHAR(255),
  project_type VARCHAR(100),
  location VARCHAR(255),
  completion_date DATE,
  project_size VARCHAR(100),
  hero_image_url VARCHAR(500),
  hero_video_url VARCHAR(500),
  sections JSONB DEFAULT '[]'::jsonb, -- Array of sections with title, content, and optional image
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create careers table
CREATE TABLE IF NOT EXISTS careers (
  id SERIAL PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  department VARCHAR(100),
  location VARCHAR(255),
  employment_type VARCHAR(50), -- full-time, part-time, contract
  experience_level VARCHAR(50), -- entry, mid, senior
  job_description TEXT NOT NULL,
  requirements TEXT[],
  responsibilities TEXT[],
  benefits TEXT[],
  salary_range VARCHAR(100),
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  application_deadline DATE,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team table
CREATE TABLE IF NOT EXISTS team (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  position VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(500),
  sections JSONB DEFAULT '[]'::jsonb, -- Array of sections with title, content, and optional image
  email VARCHAR(255),
  phone VARCHAR(50),
  linkedin_url VARCHAR(500),
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create site_metadata table for global settings
CREATE TABLE IF NOT EXISTS site_metadata (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  description VARCHAR(255),
  type VARCHAR(50) DEFAULT 'text', -- text, number, boolean, json
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS blogs_slug_idx ON blogs(slug);
CREATE INDEX IF NOT EXISTS blogs_published_idx ON blogs(published);
CREATE INDEX IF NOT EXISTS blogs_featured_idx ON blogs(featured);
CREATE INDEX IF NOT EXISTS blogs_created_at_idx ON blogs(created_at DESC);

CREATE INDEX IF NOT EXISTS services_slug_idx ON services(slug);
CREATE INDEX IF NOT EXISTS services_published_idx ON services(published);
CREATE INDEX IF NOT EXISTS services_featured_idx ON services(featured);
CREATE INDEX IF NOT EXISTS services_sort_order_idx ON services(sort_order);

CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);
CREATE INDEX IF NOT EXISTS projects_published_idx ON projects(published);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured);
CREATE INDEX IF NOT EXISTS projects_completion_date_idx ON projects(completion_date DESC);

CREATE INDEX IF NOT EXISTS careers_slug_idx ON careers(slug);
CREATE INDEX IF NOT EXISTS careers_published_idx ON careers(published);
CREATE INDEX IF NOT EXISTS careers_department_idx ON careers(department);
CREATE INDEX IF NOT EXISTS careers_location_idx ON careers(location);

CREATE INDEX IF NOT EXISTS team_slug_idx ON team(slug);
CREATE INDEX IF NOT EXISTS team_published_idx ON team(published);
CREATE INDEX IF NOT EXISTS team_featured_idx ON team(featured);
CREATE INDEX IF NOT EXISTS team_sort_order_idx ON team(sort_order);

CREATE INDEX IF NOT EXISTS site_metadata_key_idx ON site_metadata(key);

-- Insert default site metadata
INSERT INTO site_metadata (key, value, description, type) VALUES
('site_title', 'Capital Construction', 'Main site title', 'text'),
('site_description', 'Leading construction company in Dubai', 'Site description for SEO', 'text'),
('contact_email', 'info@capital.com', 'Main contact email', 'text'),
('contact_phone', '+971-XXX-XXXX', 'Main contact phone', 'text'),
('company_address', 'Dubai, UAE', 'Company address', 'text'),
('social_facebook', '', 'Facebook URL', 'text'),
('social_instagram', '', 'Instagram URL', 'text'),
('social_linkedin', '', 'LinkedIn URL', 'text'),
('social_twitter', '', 'Twitter URL', 'text')
ON CONFLICT (key) DO NOTHING;

-- Update triggers for updated_at columns
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_careers_updated_at BEFORE UPDATE ON careers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_updated_at BEFORE UPDATE ON team FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_metadata_updated_at BEFORE UPDATE ON site_metadata FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();