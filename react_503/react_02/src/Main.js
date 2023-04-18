import MainVisual from './MainVisual';
import SetCount from './setCount';
import ToggleClass from './ToggleClass';
import SectionCutomer from './SectionCustomer';
import Map from './Map';

export default function Main() {
    const Test = ({ name }) => {
        return (
            <div>{name}가 임시로 만든 커포넌트</div>
        )
    }
    return (
        <main className='mainVisual'>
            <MainVisual />
            <Test name='바보' />
            <SectionCutomer name='이창훈' age='51' color='#f00' />
            <SectionCutomer name='김창훈' age='61' color='#ff0' />
            <SectionCutomer name='박창훈' age='71' color='#f0f' />
            <SectionCutomer age='81' color='#00f' />
            <SetCount />
            <Map />
            <ToggleClass />
        </main>
    )
} 