import type { IconName } from "@/content/site";

const paths: Record<IconName, React.ReactNode> = {
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  board: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8v5H8zM8 16h.01M12 16h.01M16 16h.01M4 9H2m18 0h2M4 15H2m18 0h2" /></>,
  components: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></>,
  office: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3" /></>,
  school: <><path d="m3 10 9-6 9 6v10H3z" /><path d="M9 20v-6h6v6M7 10h.01M12 10h.01M17 10h.01" /></>,
  reseller: <><path d="M3 9h18l-2-5H5L3 9Z" /><path d="M5 9v11h14V9M9 20v-6h6v6M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>,
  integrator: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" /></>,
  lab: <><path d="M9 3h6m-5 0v7l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3M8 16h8" /></>,
  import: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 17v4h14v-4" /></>,
  check: <><path d="m5 12 4 4L19 6" /><circle cx="12" cy="12" r="9" /></>,
  box: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 8 9 5 9-5m-18 0v9l9 5 9-5V8m-9 5v9" /></>,
  warranty: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  invoice: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6m-6 4h6m-6 4h3" /></>,
  truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7.5" cy="18" r="1.5" /><circle cx="17.5" cy="18" r="1.5" /></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  phone: <><path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  chat: <><path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9 9 0 0 1-4-.9L3 21l1.9-4.4A8 8 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" /></>,
};

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
