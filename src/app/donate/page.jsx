import DonateClient from "@/components/DonationClient";

export const metadata = {
  title: "Donate | Empower Women & Youth at Ladli Foundation Africa",
  description: "Donate now to drive last-mile change with Ladli Foundation Africa—fund health, education, WASH and protection so women and youth thrive with dignity and hope",
  keywords: "Donate",
  alternates: {
    canonical: "https://africa.ladlifoundation.org/",
  },
};

export default function DonatePage() {
  return <DonateClient />;
};
