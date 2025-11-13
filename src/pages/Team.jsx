// Team.jsx
import { useEffect, useState } from "react";
import styles from "../styles/Team.module.css";
import teamData from "../data/teamData.js";
import TeamCard from "../data/teamCard.jsx";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Team() {
  const [executiveCommittee, setExecutiveCommittee] = useState([]);
  const [volunteerCommittee, setVolunteerCommittee] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadMembers = async () => {
      try {
        // Query members collection (order by timestamp if exists)
        const q = query(collection(db, "members"), orderBy("timestamp", "asc"));
        const snapshot = await getDocs(q);
        const members = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Map Firestore fields to UI-friendly member object
        const mapped = members.map((m) => ({
          name: m.fullName || m.name || "Unknown",
          role: m.role || (m.memberType === "Volcom" ? "Volunteer" : m.role || ""),
          image: m.photoURL || m.image || "",
          socials: {
            linkedin: m.linkedin || (m.socials && m.socials.linkedin) || "",
            instagram: m.instagram || (m.socials && m.socials.instagram) || "",
            email: m.email || "",
          },
          memberType: m.memberType || "",
          order: m.order || null,
        }));

        // Split into categories
        const exec = mapped.filter((m) => (m.memberType || "").toLowerCase() === "execom" || (m.memberType || "").toLowerCase() === "execom");
        const vol = mapped.filter((m) => (m.memberType || "").toLowerCase() === "volcom" || (m.memberType || "").toLowerCase() === "volcom");

        // Sort executive committee by custom order field
        exec.sort((a, b) => (a.order || 999) - (b.order || 999));
        if (mounted) {
          setExecutiveCommittee(exec);
          setVolunteerCommittee(vol);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching members:", err);
        if (mounted) setLoading(false);
      }
    };

    loadMembers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Our Team</h1>
          <p>Dedicated leaders driving IEEE PES Student Branch forward</p>
        </div>
      </section>

      <section className={styles["team-section"]}>
        {/* Faculty Advisor Section (manual, unchanged) */}
        <div className={styles["faculty-advisor"]}>
          <h3 className={styles["section-heading"]}>Faculty Advisor</h3>
          <div className={styles["team-grid"]}>
            {teamData.facultyAdvisor.map((member, idx) => (
              <TeamCard key={`fa-${idx}`} member={{
                name: member.name,
                role: member.role,
                image: member.image,
                socials: member.socials || { linkedin: "", instagram: "", email: "" }
              }} delay={idx * 0.2} />
            ))}
          </div>
        </div>

        {/* Executive Committee Section */}
        <div className={styles["executive-committee"]}>
          <h3 className={styles["section-heading"]}>Executive Committee</h3>
          <div className={styles["team-grid"]}>
            {/* if no firestore exec members found, you may optionally keep static teamData */}
            {loading ? (
              // ⭐ Minimal skeletons to maintain layout
              Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className={styles["team-card"]} style={{ opacity: 0.4 }}>
                    <div className={styles["photo-wrapper"]}>
                      <div className={styles["default-photo"]}>•</div>
                    </div>
                    <h4>Loading...</h4>
                    <p>Loading...</p>
                  </div>
                ))
            ) : (
              // render fetched exec members; if none, fall back to static
              (executiveCommittee.length > 0 ? executiveCommittee : teamData.executiveCommittee).map((member, idx) => (
                <TeamCard key={`exec-${member.id || idx}`} member={member} delay={idx * 0.15} />
              ))
            )}
          </div>
        </div>

        {/* Volunteer Committee Section (new) */}
        <div className={styles["volunteer-committee"]} style={{ marginTop: "2.5rem" }}>
          <h3 className={styles["section-heading"]}>Volunteer Committee</h3>
          <div className={styles["team-grid"]}>
            {loading ? (
              Array(3)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className={styles["team-card"]} style={{ opacity: 0.4 }}>
                    <div className={styles["photo-wrapper"]}>
                      <div className={styles["default-photo"]}>•</div>
                    </div>
                    <h4>Loading...</h4>
                  </div>
                ))
            ) : (
              (volunteerCommittee.length > 0 ? volunteerCommittee : []).map((member, idx) => (
                <TeamCard key={`vol-${member.id || idx}`} member={member} delay={idx * 0.12} />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
