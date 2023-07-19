import TeamMembers from "./TeamMembers";

export default function Team() {
  return (
    <div className="mt-16">
      <div className="container">
        <div className="flex flex-wrap gap-8">
          <TeamMembers />
          <TeamMembers />
          <TeamMembers />
          <TeamMembers />
        </div>
      </div>
    </div>
  );
}
