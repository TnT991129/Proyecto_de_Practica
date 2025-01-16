import HeroI from "./components-integration/heroIntegration"
import Stats from "./components-integration/statsI"
import ContPanel from "./components-integration/containerPanel"
import { CTASection } from "../../components/Body"
import { Foot } from "../../components/Footer"
function Integration(){
    return(
        <>
            <HeroI/>
            <ContPanel/>
            <Stats/>
            <CTASection/>
            <Foot/>
        </>
    )
}
export default Integration