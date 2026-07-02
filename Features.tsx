const features = [
  "Cross-Market Routing",
  "Single Solana Wallet",
  "Unified Portfolio",
  "Smart Order Execution",
  "Prediction Analytics",
  "Real-Time Markets"
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Core Features
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl border p-6"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}
