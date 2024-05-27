import Card from "@/components/card";
import NavigationBar from "@/components/navigation";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="mainPage">
        <Card>
          <p>Dax Schoof</p>
          <p>Page under construction!</p>
        </Card>
      </div>

      <NavigationBar />
    </Fragment>
  );
}
