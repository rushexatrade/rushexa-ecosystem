import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    route: "Polymarket",
    executionTime: "180ms",
    estimatedPrice: "0.63 USDC"
  });
}
