import { ways } from "../data";
import WayToTeach from "./WayToTeach/WayToTeach";

export default function TeachingSection() {
  return (
    <section>
      <h3>Услуги и цены</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.id} {...way} />
        ))}
      </ul>
    </section>
  );
}
