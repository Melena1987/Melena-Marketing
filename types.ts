import React from 'react';

export interface Service {
  id: string;
  title: string;
  color: 'blue' | 'yellow';
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export interface TranslationSet {
  header_slogan: string;
  nav_links: { [key: string]: string };
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_cta: string;
  services_title: string;
  services_subtitle: string;
  services: { [key: string]: string };
  services_descriptions: { [key: string]: string };
  service_modal_cta: string;
  service_modal_whatsapp_text: string;
  about_title: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  projects_title: string;
  projects_subtitle: string;
  projects_list: Project[];
  blog_title: string;
  blog_subtitle: string;
  blog_read_more: string;
  blog_view_all: string;
  blog_posts: Omit<BlogPost, 'imageUrl' | 'slug'>[];
  contact_title: string;
  contact_subtitle: string;
  contact_info_title: string;
  contact_form_name: string;
  contact_form_email: string;
  contact_form_message: string;
  contact_form_submit: string;
  contact_form_sending: string;
  contact_form_terms: string;
  contact_form_validation_error: string;
  contact_whatsapp: string;
  footer_copyright: string;
  footer_terms: string;
  footer_privacy_policy: string;
  cookie_message: string;
  cookie_accept: string;
  cookie_learn_more: string;
  terms_content: string;
  privacy_content: string;
  collaboration_title: string;
  collaboration_subtitle: string;
  collaboration_cta: string;
  energy_promo_title: string;
  energy_promo_description: string;
  energy_promo_cta: string;
  energy_form_title: string;
  energy_form_subtitle1: string;
  energy_form_subtitle2: string;
  energy_form_more_info: string;
  energy_form_upload_label: string;
  energy_form_phone: string;
  energy_form_terms: string;
  energy_form_validation_error: string;
  energy_page_send_success: string;
  energy_page_send_error: string;
  energy_page_content_title: string;
  energy_page_content_p1: string;
  energy_page_content_p2: string;
  energy_page_content_p3: string;
  energy_page_content_how_title: string;
  energy_page_content_how_p1: string;
  energy_page_content_how_p2: string;
}