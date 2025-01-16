import { Foot } from '../../components/Footer'
import { HeroSec } from './components-security/heroSec'
import { BodySec } from './components-security/bodySec'
import { CTASecurity } from './components-security/ctaSec'

function Security(){
    return(
        <>
            <HeroSec />
            <BodySec />
            <CTASecurity/>
            <Foot/>
        </>
    )
}
export default Security