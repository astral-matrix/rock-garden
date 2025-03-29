import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artist Profile | Rock Garden',
  description: 'View artist profiles on Rock Garden',
};

export default function ArtistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  );
} 