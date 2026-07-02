export default function MarketExplorer() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <h2 className="text-3xl font-bold">
        Live Prediction Markets
      </h2>

      <div className="mt-8 rounded-xl border p-6">
        <p>US Election 2028</p>
        <p>Bitcoin above $200K?</p>
        <p>Solana ETF Approval</p>

        <button className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-white">
          View All Markets
        </button>
      </div>
    </section>
  );
}
