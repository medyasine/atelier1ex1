import Buttons from "./Buttons";
import Pht from "./Pht";
import Res from "./Res";
import TVA from "./TVA";

function CalculPTTC(){
    return <fieldset>
        <legend>Calcul de PTTC</legend>
         <Pht/>
         <TVA/>
         <Buttons/>
         <Res/>

    </fieldset>
}
export default CalculPTTC;