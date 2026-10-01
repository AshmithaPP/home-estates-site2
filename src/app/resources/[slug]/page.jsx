import { notFound } from 'next/navigation';
import BlogDetailClient from '@/components/Resources/BlogDetailClient';
import { blogArticles, getBlogBySlug, getAllBlogSlugs } from '@/data/blogData';

// Pre-render all 6 blog routes statically at build time
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

// Dynamic SEO Metadata for each blog article
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = getBlogBySlug(resolvedParams?.slug);

  if (!article) {
    return {
      title: 'Article Not Found — Ajay Homes Resources',
    };
  }

  return {
    title: `${article.title} — Ajay Homes Resources`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogPage({ params }) {
  const resolvedParams = await params;
  const article = getBlogBySlug(resolvedParams?.slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailClient article={article} />;
}
