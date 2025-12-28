import { NextRequest, NextResponse } from "next/server";
;

export async function GET(req: NextRequest) {
  try {
    // 1. Extract IP address
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

      console.log("ip=====", ip);
    // 2. Call IP Geo API (server-side)
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      cache: "no-store",
    });
    console.log("resp detail:  ", res.status, res.statusText)
    if (!res.ok) {
      throw new Error("Failed to fetch geo data");
    }

    const geoData = await res.json();
    //   console.log("1111111111", geoData)

    const data = {
      ip: ip,
      country: geoData.country_name,
      countryCode: geoData.country_code,
      city: geoData.city,
      region: geoData.region,
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      timezone: geoData.timezone,
      isp: geoData.org,
      timestamp: new Date().toISOString(),
    };

      console.log(" data --->  ", data)

    

   

    // 3. Response
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
      console.log("999999999999999999999999", error.message)
    return NextResponse.json(
      { error: "Unable to detect location" },
      { status: 500 }
    );
  }
}
