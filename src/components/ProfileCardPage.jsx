import React from "react";
import LetterGlitch from "./LetterGlitch";
import ProfileCard from "./ProfileCard";

const ProfileCardPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch />
      </div>

      {/* Profile Card on top */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <ProfileCard
          name="M.BalaChellarao"
          title="Software Engineer"
          handle="mbalu31585"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/DSC_4795 copy.jpg"        // put avatar.jpg in public/
          miniAvatarUrl="/DSC_4795 copy.jpg"    // optional: same avatar for mini version
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
};

export default ProfileCardPage;
