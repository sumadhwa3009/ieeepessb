import React, { useState } from "react";
import styles from "../styles/MemberRegistration.module.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import imageCompression from "browser-image-compression";
/*import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";*/

export default function MemberRegistration() {
  const navigate = useNavigate();
  const FORM_OPEN = false;  // set to FALSE to stop entries or TRUE to enable form entries

  if (!FORM_OPEN) {
    return (
      <main className={styles.closedWrapper}>
        <section className="hero small-hero">
        <div className="hero-content">
          <h1>Member Registration</h1>
          <p>Join the IEEE PES Student Branch Chapter today!</p>
        </div>
      </section>

        <div className={styles.closedMessage}>
          <h2>🔒 Registration Closed</h2>
          <p>
            Thank you for your interest! Registration for this cycle has now been
            closed. Please check back here soon.
          </p>
        </div>
      </main>
    );
  }


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    memberType: "",
    role: "",
    photo: null,
    linkedin: "",
    instagram: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Cloudinary credentials
  const CLOUDINARY_CLOUD_NAME = "pes-ieee-bmsit";
  const CLOUDINARY_UPLOAD_PRESET = "pes_members";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Upload to Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  // Function that shows the preview popup
  const handlePreview = (e) => {
    e.preventDefault();
    if (!formData.photo) {
      alert("Please upload a photo before previewing.");
      return;
    }
    setShowPreview(true);
  };

  // Final submit logic
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setShowPreview(false);

    try {
      const options = {
        maxSizeMB: 0.4,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(formData.photo, options);
      const photoURL = await uploadToCloudinary(compressedFile);

      await addDoc(collection(db, "members"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        year: formData.year,
        memberType: formData.memberType,
        role: formData.role,
        linkedin: formData.linkedin,
        instagram: formData.instagram,
        photoURL,
        timestamp: serverTimestamp(),
      });

      setIsSubmitting(false);
      setShowModal(true);
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to submit. Please try again!");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Member Registration</h1>
          <p>Join the IEEE PES Student Branch Chapter today!</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.formCard} glass-card`}>
          <h2 className={styles.title}>Registration Form</h2>
          <form onSubmit={handlePreview} className={styles.form}>
            <p>
              <span className={styles.required}> *</span> Indicates mandatory
              fields
            </p>
            {/* Form Fields */}
            <div className={styles.formGroup}>
              <label>
                Full Name<span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Email<span className={styles.required}> *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Phone Number<span className={styles.required}> *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Department<span className={styles.required}> *</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="ETE">ETE</option>
                  <option value="AIML">AIML</option>
                  <option value="CSE">CSE</option>
                  <option value="ISE">ISE</option>
                  <option value="CSBS">CSBS</option>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>
                  Year<span className={styles.required}> *</span>
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Member Type<span className={styles.required}> *</span>
                </label>
                <select
                  name="memberType"
                  value={formData.memberType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Execom">Executive Committee</option>
                  <option value="Volcom">Volunteer Committee</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>
                  Role / Position<span className={styles.required}> *</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>
                Upload Photo<span className={styles.required}> *</span>
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Instagram URL</label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.termsGroup}>
              <label className={styles.termsLabel}>
                <input type="checkbox" id="agreeTerms" required /> I agree to
                the
                <a href="" target="_blank" rel="noopener noreferrer">
                  Terms and Condition
                </a>
                of the society. I affirm that all details furnished are true and
                correct. I accept that any discrepancy or inactivity in society
                events and meetings may render me liable to action by the Head
                of the society.<span className={styles.required}> *</span>
              </label>
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Preview & Submit"}
            </button>

            {isSubmitting && (
              <div className={styles.loaderOverlay}>
                <div className={styles.loader}></div>
              </div>
            )}
          </form>
        </div>

        {/*Preview Popup */}
        {showPreview && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h3>Preview Details</h3>
              {formData.photo && (
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="Preview"
                  className={styles.previewImage}
                />
              )}
              <p>
                <b>Name:</b> {formData.fullName}
              </p>
              <p>
                <b>Email:</b> {formData.email}
              </p>
              <p>
                <b>Phone:</b> {formData.phone}
              </p>
              <p>
                <b>Department:</b> {formData.department}
              </p>
              <p>
                <b>Year:</b> {formData.year}
              </p>
              <p>
                <b>Member Type:</b> {formData.memberType}
              </p>
              <p>
                <b>Role:</b> {formData.role}
              </p>
              {formData.linkedin && (
                <p>
                  <b>LinkedIn:</b> {formData.linkedin}
                </p>
              )}
              {formData.instagram && (
                <p>
                  <b>Instagram:</b> {formData.instagram}
                </p>
              )}

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <button className="btn" onClick={handleFinalSubmit}>
                  Final Submit
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: "#444" }}
                  onClick={() => setShowPreview(false)}
                >
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <img src="/images/tick.png" alt="success" />
              <h3>Thank you for registering!</h3>
              <p>Your details have been submitted successfully.</p>
              <button onClick={handleClose} className="btn">
                Go to Home
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
