import { Content } from "@/components/content/content";
import { Profile } from "@/components/profile/Profile";

export default function Home() {
  return (
    <main id="main" className="flex-col md:flex-row">
      <div className="profile">
        <Profile></Profile>
      </div>
      <div className="content">
        <Content />
      </div>
    </main>
  );
}
