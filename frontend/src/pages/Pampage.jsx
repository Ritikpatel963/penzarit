import { useState } from "react";

const COLORS = {
  bg: "#000000",
  bg2: "#0f1e10",
  bg3: "#122014",
  card: "#101d11",
  card2: "#0d1a0e",
  border: "#1c2e1e",
  border2: "#263d28",
  accent: "#b5e833",
  accentDim: "rgba(181,232,51,0.12)",
  accentBorder: "rgba(181,232,51,0.28)",
  white: "#ffffff",
  text: "#dff0d4",
  text2: "#8faa84",
  text3: "#566e4c",
};

const tabs = [
  { id: "auth", label: "User Authentication" },
  { id: "access", label: "Access Authority" },
  { id: "cmd", label: "Command Management" },
  { id: "session", label: "Session Management" },
];

const tabData = {
  auth: {
    heading: "Enhanced User Authentication",
    sub: "Block unauthorized access at every entry point with multi-factor and policy-driven authentication.",
    cards: [
      {
        title: "IP & MAC Blocking",
        items: [
          "Blocks unauthenticated IP addresses in real time",
          "Blocks unauthenticated MAC addresses at network layer",
          "Prevents unauthorized endpoint connectivity",
          "Policy-based allowlist and blocklist management",
        ],
        icon: ShieldIcon,
      },
      {
        title: "OTP Authentication",
        items: [
          "OTP at solution login or per individual system access",
          "RSA OTP token support",
          "Accredited certificate-based authentication",
          "LDAP directory integration",
        ],
        icon: LockIcon,
      },
      {
        title: "API & Auth Combinations",
        items: [
          "Diverse authentication-linked APIs",
          "Flexible combination support (RSA, Cert, LDAP)",
          "Easy integration with existing identity systems",
          "Customizable authentication workflows",
        ],
        icon: KeyIcon,
      },
    ],
  },
  access: {
    heading: "Access Authority Management",
    sub: "Centralize and enforce access control policies across all users, systems and protocols.",
    cards: [
      {
        title: "Centralized Policy Control",
        items: [
          "Manages each user according to individual policy",
          "Centralized access authority allocation and management",
          "Access IP, MAC, time and 2FA configuration",
          "Unifies all remote access channels",
        ],
        icon: UsersIcon,
      },
      {
        title: "Protocol Support",
        items: [
          "Telnet, SSH, FTP, SFTP support",
          "rlogin connectivity",
          "Windows Terminal Services (RDP)",
          "All major remote-access protocols covered",
        ],
        icon: NetworkIcon,
      },
      {
        title: "Alarm & Auto-Block",
        items: [
          "Alarms on unauthorized access attempts",
          "Automatically blocks suspicious sessions",
          "Configurable alert thresholds and rules",
          "Full audit trail for every access event",
        ],
        icon: AlertIcon,
      },
    ],
  },
  cmd: {
    heading: "System Command Management",
    sub: "Define, restrict and audit every command executed across your infrastructure.",
    cards: [
      {
        title: "Authority & Policy",
        items: [
          "Command authority by group or device policy",
          "White-list and black-list keyword control",
          "Bans dangerous Telnet commands",
          "Restricts leapfrog on CLI-based servers",
        ],
        icon: TerminalIcon,
      },
      {
        title: "Real-time Enforcement",
        items: [
          "Warns and blocks sessions on banned keyword entry",
          "Pattern matching for dangerous command sequences",
          "Immediate session termination on policy breach",
          "Zero-delay enforcement engine",
        ],
        icon: ZapIcon,
      },
      {
        title: "Escalation & Audit",
        items: [
          "Contacts manager by SMS or email on critical command",
          "Approval workflow before privileged execution",
          "Manages full history of all command usage",
          "Tamper-proof command audit reports",
        ],
        icon: FileIcon,
      },
    ],
  },
  session: {
    heading: "Real-time Session Management",
    sub: "Monitor, control and terminate sessions instantly to stop threats before they spread.",
    cards: [
      {
        title: "Live Monitoring",
        items: [
          "Real-time visibility on all ongoing sessions",
          "One-on-one messaging to active users",
          "Auto-blocks sessions on illegal activity",
          "Full session recording capability",
        ],
        icon: EyeIcon,
      },
      {
        title: "Time & Schedule Control",
        items: [
          "Set work hours by hour, day or date",
          "Blocks overtime sessions automatically",
          "Idle timeout enforcement policies",
          "Role-based time window configuration",
        ],
        icon: ClockIcon,
      },
      {
        title: "Compliance & Logs",
        items: [
          "Searchable session history logs",
          "Automated compliance reporting",
          "Tamper-proof session audit trail",
          "Export-ready reports for regulators",
        ],
        icon: CheckIcon,
      },
    ],
  },
};

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function KeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="15" r="4" />
      <path d="M11.7 11.3 20 3" />
      <path d="M18 5l2 2" />
      <path d="M15 8l2 2" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function NetworkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function TerminalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const stats = [
  { value: "99%", label: "Detection Power" },
  { value: "24/7", label: "Real-time Monitor" },
  { value: "4★", label: "Client Rating" },
  { value: "100%", label: "Compliance Ready" },
];

const styles = {
  page: {
    backgroundColor: COLORS.bg,
    minHeight: "100vh",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: COLORS.text,
  },


  btnPrimary: {
    backgroundColor: COLORS.accent,
    
    border: "none",
    borderRadius: 10,
    padding: "13px 28px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  btnOutline: {
    backgroundColor: "transparent",
    color: COLORS.accent,
    border: `1.5px solid ${COLORS.accentBorder}`,
    borderRadius: 10,
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },

  statCard: {
    backgroundColor: COLORS.card,
    border: `1px solid ${COLORS.border2}`,
    borderRadius: 14,
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  statDot: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: COLORS.accentDim,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statVal: {
    fontSize: 22,
    fontWeight: 800,
    color: COLORS.accent,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.text3,
    marginTop: 2,
  },
  section: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "56px 24px",
  },
  sectionLabel: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: 600,
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  sectionH2: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 700,
    color: "#fff",
    marginBottom: 8,
  },
  sectionSub: {
    fontSize: 14,
    color: COLORS.text2,
    marginBottom: 36,
    maxWidth: 520,
    lineHeight: 1.7,
  },
  tabsRow: {
    display: "flex",
    gap: 8,
    marginBottom: 32,
    flexWrap: "wrap",
  },
  tab: (active) => ({
    padding: "9px 18px",
    borderRadius: 9,
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    border: `1px solid ${active ? COLORS.accent : COLORS.border2}`,
    backgroundColor: active ? COLORS.accentDim : "transparent",
    color: active ? COLORS.accent : COLORS.text2,
    transition: "all 0.2s",
  }),
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 16,
  },
  featCard: (highlight) => ({
    backgroundColor: COLORS.card,
    border: `1px solid ${highlight ? COLORS.accentBorder : COLORS.border}`,
    borderRadius: 14,
    padding: "22px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    transition: "border-color 0.2s, transform 0.15s",
  }),
  featCardHead: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  featIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 11,
    backgroundColor: COLORS.accentDim,
    border: `1px solid ${COLORS.accentBorder}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featCardTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#d8f0c5",
    lineHeight: 1.4,
    paddingTop: 2,
  },
  featList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  featItem: {
    fontSize: 13,
    color: COLORS.text2,
    lineHeight: 1.55,
    paddingLeft: 16,
    position: "relative",
  },
  featDot: {
    position: "absolute",
    left: 2,
    top: 7,
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: COLORS.accent,
    opacity: 0.5,
  },
  divider: {
    borderColor: COLORS.border,
    margin: "0 24px",
  },
 
};

export default function PAMPage() {
  const [activeTab, setActiveTab] = useState("auth");
  const data = tabData[activeTab];

  return (
    <div style={styles.page}>
     



  
      <hr style={styles.divider} />

      <div style={styles.section}>
        <div style={styles.sectionLabel}>
          <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill={COLORS.accent} /></svg>
          Core Features
        </div>
        <h2 style={styles.sectionH2}>Comprehensive PAM Capabilities</h2>
        <p style={styles.sectionSub}>
          Four pillars of privileged access control — authentication, authority, command, and session — working together to eliminate security gaps.
        </p>

        <div style={styles.tabsRow}>
          {tabs.map((t) => (
            <button
              key={t.id}
              style={styles.tab(activeTab === t.id)}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{data.heading}</h3>
          <p style={{ fontSize: 14, color: COLORS.text2, lineHeight: 1.7 }}>{data.sub}</p>
        </div>

        <div style={styles.cardsGrid}>
          {data.cards.map((card, i) => {
            const IconComp = card.icon;
            return (
              <div key={card.title} style={styles.featCard(i === 0)}>
                <div style={styles.featCardHead}>
                  <div style={styles.featIconWrap}>
                    <IconComp />
                  </div>
                  <div style={styles.featCardTitle}>{card.title}</div>
                </div>
                <ul style={styles.featList}>
                  {card.items.map((item) => (
                    <li key={item} style={styles.featItem}>
                      <span style={styles.featDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

   <div
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/images/brands/back.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTop: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`
  }}
>
        <div style={{ ...styles.section, padding: "40px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: ShieldIcon, title: "Zero Trust", desc: "Never trust, always verify — every session authenticated." },
              { icon: EyeIcon, title: "24/7 Visibility", desc: "Real-time monitoring across all privileged channels." },
              { icon: LockIcon, title: "Policy Enforced", desc: "Granular controls with automated compliance." },
              { icon: ZapIcon, title: "Instant Response", desc: "Auto-block threats the moment they appear." },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ ...styles.featIconWrap, width: 36, height: 36, borderRadius: 9, flexShrink: 0 }}>
                    <IconComp />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#d8f0c5", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: COLORS.text2, lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

  
    </div>
  );
}