import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (await isAuthenticated() && !user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="bg-base-200 container mx-auto my-10">
      <div className="py-36 mx-auto max-w-screen-sm text-base-content">
        <p className="text-4xl font-bold text-center">
          Welcome Back! {user.given_name} {user.family_name}
        </p>
      </div>
    </div>
  );
};

export default Profile;
