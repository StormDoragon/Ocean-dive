import { ImageResponse } from "next/og";
import { readBrandMark } from "@/lib/social-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(<img src={await readBrandMark()} alt="" width={180} height={180} />, size);
}
