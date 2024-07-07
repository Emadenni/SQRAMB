import React from "react";
import "./termsAndConditions.scss";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Terms and Conditions</h2>
        <p>
          1. Acceptance of Terms Welcome to SQRAMB. By accessing or using our platform, you agree to comply with and be
          bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not
          use our platform.
          <br />
          2. Eligibility To use our platform, you must be at least 13 years old. By using our platform, you represent
          and warrant that you meet this eligibility requirement. If you are under 18, you must have the consent of a
          parent or guardian to use our platform.
          <br />
          3. Account Registration To access certain features of our platform, you may need to register for an account.
          When you register, you agree to: Provide accurate, current, and complete information about yourself. Maintain
          and promptly update your information. Keep your password confidential and secure. Notify us immediately of any
          unauthorized use of your account.
          <br />
          4. User Conduct You agree not to engage in any of the following prohibited activities: Violating any
          applicable laws or regulations. Posting, uploading, or sharing content that is unlawful, harmful, threatening,
          abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, or otherwise
          objectionable. Impersonating any person or entity or falsely stating or misrepresenting your affiliation with
          a person or entity. Using our platform for any commercial purpose without our express written consent.
          Interfering with or disrupting the integrity or performance of our platform or the data contained therein.
          Attempting to gain unauthorized access to our platform, user accounts, or computer systems or networks
          connected to our platform.
          <br />
          5. Content Ownership and Use You retain ownership of any content you post, upload, or share on our platform
          ("User Content"). By posting User Content, you grant us a non-exclusive, royalty-free, worldwide,
          sublicensable, and transferable license to use, reproduce, modify, distribute, and display your User Content
          in connection with our platform and our business. 6. Privacy Your use of our platform is also governed by our
          Privacy Policy, which explains how we collect, use, and disclose your personal information. By using our
          platform, you consent to our collection and use of your information as outlined in the Privacy Policy.
          <br />
          7. Termination We reserve the right to suspend or terminate your account or access to our platform at any
          time, for any reason, without notice, including if you violate these Terms.
          <br />
          8. Disclaimers Our platform is provided "as is" and "as available" without any warranties of any kind, either
          express or implied. We do not guarantee that our platform will be uninterrupted, error-free, or free from
          viruses or other harmful components. Your use of our platform is at your own risk.
          <br />
          9. Limitation of Liability To the fullest extent permitted by law, we shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
          <br />
          Your use of or inability to use our platform. Any unauthorized access to or use of our servers and/or any
          personal information stored therein. Any bugs, viruses, Trojan horses, or the like that may be transmitted to
          or through our platform by any third party. Any errors or omissions in any content or for any loss or damage
          incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available
          through our platform.
          <br />
          10. Indemnification You agree to indemnify, defend, and hold harmless SQRAMB, its affiliates, and their
          respective officers, directors, employees, agents, and licensors from and against any and all claims,
          liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from
          your use of our platform or your violation of these Terms.
          <br /> 11. Governing Law These Terms shall be governed by and construed in accordance with the laws of Sweden,
          without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms
          shall be subject to the exclusive jurisdiction of the courts of Sweden.
          <br />
          12. Changes to Terms We reserve the right to modify or update these Terms at any time, in our sole discretion.
          We will notify you of any changes by posting the new Terms on our platform. Your continued use of our platform
          after any such changes constitutes your acceptance of the new Terms.
          <br />
          13. Contact Us If you have any questions or concerns about these Terms, please contact us at info@sqramb.com.
          By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms
          and Conditions.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
