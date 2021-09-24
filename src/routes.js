import { Switch, Route } from "react-router-dom";
import CalcLiters from "./pages/CalcLitrers";
import { CalcVolume } from "./pages/CalcVolume";
import { CalcQuant } from "./pages/CalcQuant";
import { CalcPacks } from "./pages/CalcPack";
export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"} component={CalcVolume} />
      <Route path={"/liters"} component={CalcLiters} />
      <Route path={"/quant"} component={CalcQuant} />
      <Route path={"/pack"} component={CalcPacks} />
    </Switch>
  );
}
