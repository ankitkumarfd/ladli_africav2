import PayFastForm from '@/components/PayFastForm';

export default function DonatePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Donate to Ladli Africa
      </h1>
      <PayFastForm />
    </main>
  );
}
