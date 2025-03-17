import type { SVGProps } from "react";

export function UiUxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`text-blue-500 ${props.className || ""}`}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="28" y="4" width="16" height="16" rx="2" />
      <rect x="4" y="28" width="16" height="16" rx="2" />
      <rect x="28" y="28" width="16" height="16" rx="2" />
      <path d="M10 12h4" />
      <path d="M34 12h4" />
      <path d="M10 36h4" />
      <path d="M34 36h4" />
      <path d="M12 8v4" />
      <path d="M36 8v4" />
      <path d="M12 32v4" />
      <path d="M36 32v4" />
    </svg>
  );
}

export function CreativeDesignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`text-blue-500 ${props.className || ""}`}
    >
      <path d="M24 4v8" />
      <path d="M24 36v8" />
      <circle cx="24" cy="24" r="8" />
      <path d="M8.93 15.93l5.66 5.66" />
      <path d="M33.41 26.41l5.66 5.66" />
      <path d="M8.93 32.07l5.66-5.66" />
      <path d="M33.41 21.59l5.66-5.66" />
    </svg>
  );
}

export function CorporateBrandingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`text-blue-500 ${props.className || ""}`}
    >
      <circle cx="24" cy="16" r="12" />
      <path d="M12 32c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <path d="M24 28v16" />
      <path d="M16 36h16" />
    </svg>
  );
}

export function SocialMediaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={`text-blue-500 ${props.className || ""}`}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="36" cy="12" r="8" />
      <circle cx="12" cy="36" r="8" />
      <circle cx="36" cy="36" r="8" />
      <path d="M20 12h8" />
      <path d="M12 20v8" />
      <path d="M28 36h8" />
      <path d="M36 28v-8" />
    </svg>
  );
}
