import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loan Road | Direct Lending & Credit Desk Across 150+ Banks",
  description:
    "Loan Road: Direct financial underwriting for challenging profiles. Incomplete Paperwork, Running Loans Consolidation, Low CIBIL Dispute Rectification, Defense/Army 24h Express VIP Desk, and Complete Insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-dark-900 selection:bg-brand-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
