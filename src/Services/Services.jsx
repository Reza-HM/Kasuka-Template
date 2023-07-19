import ServicesBox from "./ServicesBox";

export default function Services() {
  return (
    <div className="mt-16">
      <div className="container">
        <div className="flex flex-wrap gap-8">
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
          <ServicesBox />
        </div>
      </div>
    </div>
  );
}
