import { useState } from "react";

const POKEMON = [
  { id: "abra", name: "Abra", color: "#c8a058", fr: 180, lg: 120 },
  { id: "clefairy", name: "Clefairy", color: "#f8b8d0", fr: 500, lg: 750 },
  { id: "scyther", name: "Scyther", color: "#60b840", fr: 5500, lg: null },
  { id: "pinsir", name: "Pinsir", color: "#a07040", fr: null, lg: 2500 },
  { id: "dratini", name: "Dratini", color: "#6890f0", fr: 2800, lg: 4600 },
  { id: "porygon", name: "Porygon", color: "#f8a0b8", fr: 9999, lg: 6500 },
];
const TMS = [
  { id: "tm13", name: "TM13 Ice Beam", color: "#60c8e8", fr: 4000, lg: 4000 },
  { id: "tm23", name: "TM23 Iron Tail", color: "#b8c0c8", fr: 3500, lg: 3500 },
  {
    id: "tm24",
    name: "TM24 Thunderbolt",
    color: "#f8d030",
    fr: 4000,
    lg: 4000,
  },
  {
    id: "tm30",
    name: "TM30 Shadow Ball",
    color: "#9070c8",
    fr: 4500,
    lg: 4500,
  },
  {
    id: "tm35",
    name: "TM35 Flamethrower",
    color: "#f08030",
    fr: 4000,
    lg: 4000,
  },
];
const ITEMS = [
  { id: "smokeball", name: "Smoke Ball", color: "#909090", fr: 800, lg: 800 },
  {
    id: "miracleseed",
    name: "Miracle Seed",
    color: "#40c840",
    fr: 1000,
    lg: 1000,
  },
  { id: "charcoal", name: "Charcoal", color: "#505050", fr: 1000, lg: 1000 },
  {
    id: "mysticwater",
    name: "Mystic Water",
    color: "#4090f0",
    fr: 1000,
    lg: 1000,
  },
  {
    id: "yellowflute",
    name: "Yellow Flute",
    color: "#f0d000",
    fr: 1600,
    lg: 1600,
  },
];
const ALL = [...POKEMON, ...TMS, ...ITEMS];

export default function App() {
  const [ver, setVer] = useState("fr");
  const [qty, setQty] = useState(() =>
    Object.fromEntries(ALL.map((p) => [p.id, 0]))
  );

  const switchVer = (v) => {
    setVer(v);
    setQty((prev) => {
      const next = { ...prev };
      ALL.forEach((p) => {
        if (p[v] === null) next[p.id] = 0;
      });
      return next;
    });
  };
  const toggle = (id) =>
    setQty((prev) => ({ ...prev, [id]: prev[id] > 0 ? 0 : 1 }));
  const adjust = (id, d, u) => {
    if (!u) setQty((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + d) }));
  };
  const reset = () => setQty(Object.fromEntries(ALL.map((p) => [p.id, 0])));

  const sel = ALL.filter((p) => qty[p.id] > 0 && p[ver] !== null);
  const tc = sel.reduce((s, p) => s + p[ver] * qty[p.id], 0);
  const tp = tc * 20;
  const ng = Math.ceil(tp / 5000);
  const lft = ng * 5000 - tp;

  const g = "#FFD700",
    dk = "#1a1a2e",
    pn = "#16213e",
    p2 = "#0f3460",
    mu = "#8899aa";
  const ps = { fontFamily: "'Press Start 2P',monospace" };
  const vt = { fontFamily: "'VT323',monospace" };

  return (
    <div
      style={{
        ...vt,
        background: dk,
        minHeight: "100vh",
        color: "#e8e8e8",
        fontSize: 20,
        backgroundImage:
          "linear-gradient(rgba(255,215,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.03) 1px,transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
      <div
        style={{ maxWidth: 860, margin: "0 auto", padding: "20px 14px 220px" }}
      >
        <div
          style={{
            textAlign: "center",
            paddingBottom: 20,
            borderBottom: `4px solid ${g}`,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              ...ps,
              display: "inline-block",
              background: g,
              color: dk,
              fontSize: 8,
              padding: "4px 14px",
              marginBottom: 10,
              clipPath:
                "polygon(8px 0%,calc(100% - 8px) 0%,100% 50%,calc(100% - 8px) 100%,8px 100%,0% 50%)",
            }}
          >
            ★ KANTO REGION ★
          </div>
          <div
            style={{
              ...ps,
              fontSize: "clamp(12px,3vw,18px)",
              lineHeight: 1.7,
              color: g,
              textShadow: "3px 3px 0 #8B6914",
            }}
          >
            NUGGET BRIDGE
            <br />
            CALCULATOR
          </div>
          <div
            style={{ color: mu, fontSize: 17, letterSpacing: 2, marginTop: 4 }}
          >
            GAME CORNER — CELADON CITY
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {[
            ["fr", "🔴 FIRE RED"],
            ["lg", "🌿 LEAF GREEN"],
          ].map(([v, label]) => (
            <button
              key={v}
              onClick={() => switchVer(v)}
              style={{
                ...ps,
                fontSize: 9,
                padding: "10px 20px",
                border: "3px solid",
                cursor: "pointer",
                clipPath:
                  "polygon(6px 0%,calc(100% - 6px) 0%,100% 6px,100% calc(100% - 6px),calc(100% - 6px) 100%,6px 100%,0% calc(100% - 6px),0% 6px)",
                ...(ver === v && v === "fr"
                  ? {
                      background: "linear-gradient(135deg,#CC0000,#ff6600)",
                      color: "#fff",
                      borderColor: "#ff9944",
                    }
                  : ver === v && v === "lg"
                  ? {
                      background: "linear-gradient(135deg,#1a7a1a,#44bb44)",
                      color: "#fff",
                      borderColor: "#88ff88",
                    }
                  : { background: pn, color: mu, borderColor: mu }),
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          style={{
            background: pn,
            borderLeft: `4px solid ${g}`,
            padding: "10px 18px",
            marginBottom: 20,
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 28px",
            alignItems: "center",
          }}
        >
          {[
            ["NUGGET VALUE", "₽5,000"],
            ["COIN RATE", "50c = ₽1,000"],
            ["₽ PER COIN", "₽20"],
          ].map(([l, v]) => (
            <span key={l}>
              <span style={{ color: mu }}>{l} </span>
              <span style={{ color: g, fontSize: 21 }}>{v}</span>
            </span>
          ))}
        </div>

        {[
          { label: "▶ POKÉMON PRIZES", list: POKEMON, shape: "circle" },
          { label: "▶ TM PRIZES", list: TMS, shape: "tm" },
          { label: "▶ ITEM PRIZES", list: ITEMS, shape: "item" },
        ].map(({ label, list, shape }) => (
          <div key={label}>
            <div
              style={{
                ...ps,
                fontSize: 9,
                color: g,
                letterSpacing: 2,
                margin: "20px 0 8px",
                paddingLeft: 8,
                borderLeft: `4px solid ${g}`,
              }}
            >
              {label}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                gap: 8,
              }}
            >
              {list.map((p) => {
                const coins = p[ver],
                  u = coins === null,
                  q = qty[p.id],
                  s = q > 0,
                  ex = p.fr === null || p.lg === null;
                return (
                  <div
                    key={p.id}
                    onClick={() => !u && toggle(p.id)}
                    style={{
                      background: s
                        ? ver === "fr"
                          ? "#2a1208"
                          : "#081e0a"
                        : pn,
                      border: `2px solid ${
                        s ? (ver === "fr" ? "#ff6622" : "#44cc44") : p2
                      }`,
                      padding: "11px 13px",
                      cursor: u ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      userSelect: "none",
                      opacity: u ? 0.35 : 1,
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color 0.15s,background 0.15s",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg,rgba(255,215,0,0.04),transparent 60%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        fontSize: 13,
                        color: "#fff",
                        border: `3px solid ${s ? "transparent" : mu}`,
                        background: s
                          ? ver === "fr"
                            ? "#ff5500"
                            : "#33bb33"
                          : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        clipPath:
                          "polygon(3px 0,100% 0,100% calc(100% - 3px),calc(100% - 3px) 100%,0 100%,0 3px)",
                      }}
                    >
                      {s ? "✓" : ""}
                    </div>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        flexShrink: 0,
                        borderRadius:
                          shape === "circle" ? "50%" : shape === "tm" ? 6 : 4,
                        background: `linear-gradient(135deg,${p.color},${p.color}88)`,
                        border: `2px solid ${p.color}bb`,
                        boxShadow:
                          "inset -2px -2px 0 rgba(0,0,0,0.25),0 2px 4px rgba(0,0,0,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 7,
                        color: "rgba(0,0,0,0.65)",
                        fontWeight: "bold",
                        ...ps,
                      }}
                    >
                      {shape === "tm"
                        ? "TM"
                        : p.name.substring(0, 3).toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 19,
                          color: "#e8e8e8",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {p.name}
                        {ex && (
                          <span
                            style={{
                              ...ps,
                              fontSize: 7,
                              padding: "2px 4px",
                              borderRadius: 2,
                              marginLeft: 6,
                              verticalAlign: "middle",
                              background: p.fr === null ? "#1a7a1a" : "#CC0000",
                              color: "#fff",
                            }}
                          >
                            {p.fr === null ? "LG" : "FR"}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 16, color: u ? mu : g }}>
                        {u
                          ? "— NOT AVAILABLE —"
                          : `🪙 ${coins.toLocaleString()} coins`}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => adjust(p.id, -1, u)}
                        style={{
                          width: 26,
                          height: 26,
                          background: p2,
                          border: `2px solid ${mu}`,
                          color: "#e8e8e8",
                          ...vt,
                          fontSize: 22,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        −
                      </button>
                      <div
                        style={{
                          width: 30,
                          textAlign: "center",
                          background: "#0d1117",
                          borderTop: `2px solid ${mu}`,
                          borderBottom: `2px solid ${mu}`,
                          fontSize: 19,
                          padding: "2px 0",
                          color: g,
                        }}
                      >
                        {q}
                      </div>
                      <button
                        onClick={() => adjust(p.id, 1, u)}
                        style={{
                          width: 26,
                          height: 26,
                          background: p2,
                          border: `2px solid ${mu}`,
                          color: "#e8e8e8",
                          ...vt,
                          fontSize: 22,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div
          style={{
            position: "sticky",
            bottom: 16,
            marginTop: 24,
            background: "linear-gradient(135deg,#0d1b2a,#162032)",
            border: `3px solid ${g}`,
            padding: "16px 20px",
            boxShadow: "0 0 28px rgba(255,215,0,0.18)",
            clipPath:
              "polygon(12px 0%,calc(100% - 12px) 0%,100% 12px,100% calc(100% - 12px),calc(100% - 12px) 100%,12px 100%,0% calc(100% - 12px),0% 12px)",
          }}
        >
          {sel.length === 0 ? (
            <div style={{ textAlign: "center", color: mu, fontSize: 18 }}>
              ← SELECT PRIZES ABOVE{" "}
              <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
            </div>
          ) : (
            <>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    maxHeight: 80,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "2px 10px",
                    }}
                  >
                    {sel.map((p) => {
                      const lc = p[ver] * qty[p.id];
                      return [
                        <div
                          key={p.id + "l"}
                          style={{
                            color: mu,
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {qty[p.id] > 1 ? qty[p.id] + "× " : ""}
                          {p.name}
                        </div>,
                        <div
                          key={p.id + "v"}
                          style={{
                            textAlign: "right",
                            fontSize: 16,
                            color: g,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {lc.toLocaleString()}c
                        </div>,
                      ];
                    })}
                  </div>
                </div>
                {sel.length > 3 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 22,
                      background: "linear-gradient(transparent,#0d1b2a)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>
              <div style={{ height: 2, background: p2, margin: "8px 0" }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "4px 10px",
                }}
              >
                <div style={{ color: mu, fontSize: 16 }}>TOTAL COINS</div>
                <div
                  style={{
                    ...ps,
                    textAlign: "right",
                    fontSize: 12,
                    color: "#e8e8e8",
                  }}
                >
                  {tc.toLocaleString()} coins
                </div>
                <div style={{ color: mu, fontSize: 16 }}>POKÉDOLLARS</div>
                <div
                  style={{
                    ...ps,
                    textAlign: "right",
                    fontSize: 12,
                    color: "#e8e8e8",
                  }}
                >
                  ₽{tp.toLocaleString()}
                </div>
                <div
                  style={{
                    gridColumn: "1/-1",
                    height: 2,
                    background: p2,
                    margin: "3px 0",
                  }}
                />
                <div style={{ color: g, fontSize: 20, alignSelf: "center" }}>
                  NUGGETS NEEDED
                </div>
                <div
                  style={{
                    ...ps,
                    textAlign: "right",
                    fontSize: 20,
                    color: g,
                    textShadow: "0 0 10px rgba(255,215,0,0.5)",
                    alignSelf: "center",
                  }}
                >
                  {ng} 🟡
                </div>
                <div style={{ color: mu, fontSize: 14 }}>LEFTOVER</div>
                <div style={{ textAlign: "right", fontSize: 14, color: mu }}>
                  ₽{lft.toLocaleString()}
                </div>
              </div>
            </>
          )}
          <button
            onClick={reset}
            style={{
              ...ps,
              display: "block",
              width: "100%",
              marginTop: 12,
              padding: 9,
              fontSize: 8,
              background: "transparent",
              border: `2px solid ${mu}`,
              color: mu,
              cursor: "pointer",
              letterSpacing: 1,
            }}
          >
            ✕ CLEAR SELECTION
          </button>
        </div>
      </div>
    </div>
  );
}
