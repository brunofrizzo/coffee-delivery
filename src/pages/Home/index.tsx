import { CoffeeCard } from "../../components/CoffeeCard";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <h1>Nossos cafés</h1>
            <div className="coffeeDiv">
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </div>
        </HomeContainer>
    )
}