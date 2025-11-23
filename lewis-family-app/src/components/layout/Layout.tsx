import type { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
