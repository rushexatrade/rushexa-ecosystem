import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      platform: "Polymarket",
      market: "BTC > $200K",
      odds: "61%"
    },
    {
      platform: "Kalshi",
      market: "Fed Rate Cut",
      odds: "48%"
    }
  ]);
}
