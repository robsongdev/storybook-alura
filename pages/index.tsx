import Button from "../src/components/Button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomePage() {
    return (
        <ThemeProvider>
            <div>
                <h1>HomePage</h1>
                <Button variant="primary">Botão simples</Button>
            </div>
        </ThemeProvider>
    );
}
