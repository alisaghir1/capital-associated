-- Migration: Add alt text fields for images (SEO improvement)
-- Run this migration to add alt text columns to all content tables

-- Add alt text field to blogs table
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS hero_image_alt VARCHAR(500);

-- Add alt text fields to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS hero_image_alt VARCHAR(500);
ALTER TABLE services ADD COLUMN IF NOT EXISTS icon_alt VARCHAR(255);

-- Add alt text field to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS hero_image_alt VARCHAR(500);

-- Add alt text field to team table
ALTER TABLE team ADD COLUMN IF NOT EXISTS image_alt VARCHAR(500);

-- Note: For section images, the alt text should be included in the JSONB sections array
-- Each section object should have: { title, content, image, image_alt }
-- This is handled at the application level, not in the database schema

-- Add comments for documentation
COMMENT ON COLUMN blogs.hero_image_alt IS 'Alt text for hero image (SEO)';
COMMENT ON COLUMN services.hero_image_alt IS 'Alt text for hero image (SEO)';
COMMENT ON COLUMN services.icon_alt IS 'Alt text for service icon (SEO)';
COMMENT ON COLUMN projects.hero_image_alt IS 'Alt text for hero image (SEO)';
COMMENT ON COLUMN team.image_alt IS 'Alt text for team member image (SEO)';
