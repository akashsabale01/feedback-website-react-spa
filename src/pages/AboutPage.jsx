import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <h1>About Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
        exercitationem deleniti laudantium atque consequatur molestiae
        distinctio perspiciatis unde repellendus numquam?
      </p>
      <p>
        <span style={{ fontWeight: 600 }}>Version:</span> 1.0.0
      </p>
      <Link to="/">Go to Home page</Link>
    </Card>
  );
};

export default AboutPage;
